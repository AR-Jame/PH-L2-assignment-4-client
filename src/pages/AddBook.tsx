import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";

const AddBook = () => {
    const form = useForm();
    console.log(form);
    const handleAddBook = (bookData) => {
        console.log(bookData);
    }
    return (
        <section className="flex h-[90vh] justify-center items-center">
            <Form {...form}>
                <form className="border p-10 rounded-md border-gray-600" onSubmit={form.handleSubmit(handleAddBook)}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
                                        type="text"
                                        className="px-4"
                                        size={30}
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
                            <FormItem>
                                <FormLabel>Author</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
                                        type="text"
                                        className="px-4"
                                        size={30}
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
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
                                        type="text"
                                        className="px-4"
                                        size={30}
                                        placeholder="Write your book's genre"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isbn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>ISBN</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
                                        type="text"
                                        className="px-4"
                                        size={30}
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
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
                                        type="text"
                                        className="px-4"
                                        size={30}
                                        placeholder="Write your book title"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="copies"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Copies</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
                                        type="number"
                                        className="px-4"
                                        size={30}
                                        placeholder="Write your book title"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <Button className="border w-full mt-3" type="submit">Add</Button>
                </form>
            </Form>
        </section >
    );
};

export default AddBook;