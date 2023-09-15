import Input from '@/components/Input';
import Button from '@/components/Button';
import Form from '@/components/Form';

export default function Home() {
    async function handle(formData: FormData) {
        'use server';

        // Do something with the form data, like saving it to a database
        console.log(formData.get('name'));
        console.log(formData.get('surname'));

        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    return (
        <div className={'h-screen w-full flex justify-center items-center'}>
            <div className={'p-8 border-zinc-800 rounded-xl border lg:w-1/2 w-full mx-4'}>
                <h1 className={'text-2xl font-bold text-white mb-8 text-center'}>Forms !</h1>

                <Form action={handle} className={'flex flex-col gap-y-6'}>
                    <div className={'flex flex-col gap-y-2'}>
                        <label htmlFor="name" className="text-white text-md font-bold tracking-wide uppercase">
                            Name :
                        </label>
                        <Input placeholder={'John'} name={'name'} id={'name'} validate={'^.'} />
                    </div>

                    <div className={'flex flex-col gap-y-2'}>
                        <label htmlFor="surname" className="text-white text-md font-bold tracking-wide uppercase">
                            Surname :
                        </label>
                        <Input placeholder={'Wick'} name={'surname'} id={'surname'} validate={'^.'} />
                    </div>

                    <Button className={'mt-6'} type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}
