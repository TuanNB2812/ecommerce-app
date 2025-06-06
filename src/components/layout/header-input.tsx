'use client';

import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import {useState} from "react";

export default function HeaderInput() {
    const [keyword, setKeyword] = useState('');

    const handleSearch = () => {
        console.log(`Searching for: ${keyword}`);
    }

    return (
        <div className="relative">
            <Input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="pr-10 bg-white text-black"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-black"
                onClick={() => handleSearch()}
            >
                <Search size={20}/>
            </div>
        </div>
    );
}