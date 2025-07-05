import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useNewBorrowMutation } from "@/redux/api/baseApi";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { toast } from "sonner";

const Borrow = () => {
    const { bookId } = useParams();
    const form = useForm();
    const navigate = useNavigate();
    const { state: { copies } } = useLocation();
    const [newBorrow, { isError, error }] = useNewBorrowMutation();

    const handleBorrow: SubmitHandler<FieldValues> = async (borrowData) => {
        if (!borrowData.dueDate) form.setError('dueDate', {
            type: 'manual',
            message: 'Please give a date'
        })
        const parsedQuantity = parseInt(borrowData.quantity)
        if (copies < parsedQuantity) return form.setError('quantity', {
            type: 'manual',
            message: `we have only ${copies} copies available.`
        })
        borrowData.dueDate = borrowData.dueDate.toISOString();
        borrowData.book = bookId;
        borrowData.quantity = parsedQuantity
        const res = await newBorrow(borrowData)
        console.log(res);
        if (res?.data?.success === true) {
            toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                },
            })
            navigate('/books')
        }
    }
    console.log(error);
    return (
        <section className="flex flex-col h-[90vh] justify-center items-center">
            <p className="text-3xl mb-3 text-left">Update the book</p>
            <Form {...form}>
                <form className="border p-10 rounded-md border-gray-600" onSubmit={form.handleSubmit(handleBorrow)}>
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem className="mb-2">
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        value={field.value || ''}
                                        type="number"
                                        className="px-4"
                                        size={30}
                                        required={true}
                                        min={1}
                                        placeholder="What is your quantity"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="dueDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Due Date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick a date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date < new Date()
                                            }
                                            captionLayout="dropdown"
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {isError && <p></p>}
                    <Button size={'lg'} className="border mt-3 w-full" type="submit">Add</Button>
                </form>
            </Form>
        </section >
    );
};

export default Borrow;