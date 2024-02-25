// Import your Logout Button component
import ButtonWithLogout from '@/app/components/ButtonWithOnClick';
import { getUserSession } from '@/app/lib/session'


const Page = async () => {
    const user = await getUserSession();
    return (
        <div>
            <main className="">{JSON.stringify(user)}
            <ButtonWithLogout />
            </main>
        </div>
    );
};

export default Page;
