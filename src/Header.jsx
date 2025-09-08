export default function Header(){
    return (
        <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#f8f9fa] shadow-md z-50"> 
            <div className="container mx-auto flex justify-between items-center "> 
                <a href="/" className="text-3xl font-bold text-gray-800">
                    Tasker
                </a>
            </div>
        </nav>
    );
}