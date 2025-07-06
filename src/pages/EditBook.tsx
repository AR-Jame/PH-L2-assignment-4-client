import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useGetSingleBookQuery, useUpdateBookMutation } from "@/redux/api/baseApi";
import { useEffect } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "sonner";

const EditBook = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useGetSingleBookQuery(params.id);
    const [updateBook] = useUpdateBookMutation();

    // TODO: fix the select field's default value

    const form = useForm({
        defaultValues: {
            title: '',
            author: '',
            genre: '',
            isbn: '',
            description: '',
            copies: '',
            available: true
        }
    });

    const { reset } = form;
    const copies = form.watch('copies');

    useEffect(() => {
        if (data?.data) {
            setTimeout(() => {
                form.reset({
                    title: data.data.title,
                    author: data.data.author,
                    genre: data.data.genre,
                    isbn: data.data.isbn,
                    description: data.data.description,
                    copies: String(data.data.copies),
                    available: data.data.available
                });
            }, 0);
        }
    }, [data, reset]);


    useEffect(() => {
        if (parseInt(copies) === 0) {
            form.setValue('available', false)
        }
    }, [copies, form])


    const handleEditBook: SubmitHandler<FieldValues> = async (updatedDoc) => {
        console.log(updatedDoc);
        if (updatedDoc.copies === 0) updatedDoc.available = false
        const res = await updateBook({ _id: data.data._id, updatedDoc });
        console.log(res.data.success);
        if (res.data.success === true) {
            toast("You successfully Updated the book data.", {
                duration: 2000
            })
            navigate('/books')
        }
    }

    if (isLoading) return <p>Data is loading</p>
    return (
        <section className="flex flex-col h-[90vh] justify-center items-center">
            <p className="text-3xl mb-3 text-left">Update the book</p>
            <Form {...form} key={data?.data?._id || 'form'}>
                <form className="border p-10 rounded-md border-gray-600" onSubmit={form.handleSubmit(handleEditBook)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="mb-2">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value}
                                        type="text"
                                        className="px-4"
                                        size={30}
                                        required={true}
                                        placeholder="Write your book title"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem className="mb-2">
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value}
                                        type="text"
                                        className="px-4"
                                        size={30}
                                        required={true}
                                        placeholder="Write the book author"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="genre"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Genre</FormLabel>
                                <Select
                                    required={true}
                                    value={field.value || ''}
                                    onValueChange={field.onChange}
                                >
                                    <FormControl className="w-full mb-3">
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {
                                            ['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'].map(item => (

                                                <SelectItem key={item} value={item}>{item}</SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isbn"
                        render={({ field }) => (
                            <FormItem className="mb-2">
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value}
                                        type="text"
                                        className="px-4"
                                        size={30}
                                        required={true}
                                        placeholder="Write your book ISBN number"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="mb-2">
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about yourself"
                                        className="resize-none"
                                        {...field}
                                        value={field.value}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="copies"
                        render={({ field }) => (
                            <FormItem className="mb-2">
                                <FormLabel>Copies</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value}
                                        type="number"
                                        className="px-4"
                                        size={30}
                                        required={true}
                                        min={0}
                                        placeholder="How many copies you have"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="available"
                        render={({ field }) => (
                            <FormItem className="space-y-1 mb-3">
                                <FormLabel>Books availability</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={(val) => field.onChange(val === "true")}
                                        value={String(field.value)}
                                        className="flex"
                                    >
                                        <FormItem className="flex items-center gap-3">
                                            <FormControl>
                                                <RadioGroupItem value='true' />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Available
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center gap-3">
                                            <FormControl>
                                                <RadioGroupItem value="false" />
                                            </FormControl>
                                            <FormLabel className="font-normal">unavailable</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* {
                        isError && <p className="text-red-400 text-sm">{error.data.message}</p>
                    } */}
                    <Button size={'lg'} className="border mt-3 w-full" type="submit">Add</Button>
                </form>
            </Form>
        </section >
    );
};

export default EditBook;