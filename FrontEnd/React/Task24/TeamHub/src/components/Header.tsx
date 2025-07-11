export default function Header() {
    return (
        <header className="flex justify-between items-center p-2 lg:px-6 lg:py-4 shadow-sm">
        <h1 className="lg:text-2xl font-bold text-blue-600">TeamHub</h1>
        <nav className="flex items-center gap-2 lg:gap-6">
            <a href="#" className="text-[15px] lg:text-[17px] text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-[15px] lg:text-[17px] text-gray-700 hover:text-blue-600">Team</a>
            <a href="#" className="text-[15px] lg:text-[17px] text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-[15px] lg:text-[17px] text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white p-2 lg:px-4 lg:py-2 rounded text-[10px] lg:text-[15px]">Join Us</button>

        </header>
    );
}
