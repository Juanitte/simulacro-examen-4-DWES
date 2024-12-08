import { Logout } from "@/components/forms"

export default function Navbar() {
    return (
        <>
            <div className="flex flex-row justify-around">
                <a className="text-decoration-none text-white p-4">
                    Home
                </a>
                <a className="text-decoration-none text-white p-4">
                    Database
                </a>
                <a className="text-decoration-none text-white p-4">
                    API REST
                </a>
                <Logout></Logout>
            </div>
        </>
    );
}