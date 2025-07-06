import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAddNewBookMutation } from "@/redux/api/baseApi";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";

const AddBook = () => {
    const form = useForm();
    const navigate = useNavigate();

    const [addNewBook, { isError, error, isLoading }] = useAddNewBookMutation();
    const handleAddBook: SubmitHandler<FieldValues> = async (bookData) => {
        console.log(bookData);
        const res = await addNewBook(bookData)
        console.log(res);
        if (res.data.success) navigate('/books')
    }
    console.log(isError, error);
    return (
        <section className="flex flex-col h-[90vh] justify-center items-center">
            <p className="text-3xl mb-3 text-left">ADD A NEW BOOK</p>
            <Form {...form}>
                <form className="border p-10 rounded-md border-gray-600" onSubmit={form.handleSubmit(handleAddBook)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="mb-2">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
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
                                        value={field.value || ''}
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
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl className="w-full mb-3">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a genre" />
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
                                        value={field.value || ''}
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
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
                                        type="text"
                                        className="px-4"
                                        size={30}
                                        placeholder="Write a brief description"
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
                                        value={field.value || ''}
                                        type="number"
                                        className="px-4"
                                        size={30}
                                        required={true}
                                        min={1}
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
                                        onValueChange={(val) => field.onChange(val === "true")} // ✅ convert to boolean
                                        value={String(field.value)} // ✅ convert to string
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
                    {isError && 'data' in error && (
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        <p className="text-red-400 text-sm">{(error as any).data.message}</p>
                    )}
                    {
                        isLoading ?
                            <Button size={'lg'} disabled className="border mt-3 w-full" type="submit">Loading...</Button>

                            :
                            <Button size={'lg'} className="border mt-3 w-full" type="submit">Add</Button>
                    }
                </form>
            </Form>
        </section >
    );
};

export default AddBook;