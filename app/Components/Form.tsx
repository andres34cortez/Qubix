"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

// Campos del formulario y mensaje de error
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nombre no puede estar vacio.",
  }),
  email: z.string().min(2, {
    message: "Email no puede estar vacio.",
  }),
  message: z.string().min(2, {
    message: "Mensaje no puede estar vacio.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 max-w-[800px] mx-auto border border-[#E5E7EB] rounded-[6px] p-4 bg-gray-100'
        /*   className='space-y-8 w-[600px] self-center border border-[#E5E7EB] rounded-[6px] p-9 bg-gray-100' */
      >
        <div className='flex flex-row  items-center  justify-'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className="pr-4">
                <FormLabel className='text-xl text-[#544b54]'>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder='Nombre' {...field} />
                </FormControl>
                <FormMessage className='text-sm' />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-xl text-[#544b54]'>
                  Contacto
                </FormLabel>
                <FormControl>
                  <Input placeholder='Email o telefono' {...field} />
                </FormControl>
                <FormMessage className='text-sm' />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-xl text-[#544b54]'>Mensaje</FormLabel>
              <FormControl>
                <Textarea placeholder='Dejanos tu mensaje!' {...field} />
              </FormControl>
              <FormMessage className='text-sm' />
            </FormItem>
          )}
        />
        <div className='flex flex-col sm:flex-row justify-end items-center'>
          <Button type='submit'>Enviar</Button>
        </div>
      </form>
    </Form>
  );
}
