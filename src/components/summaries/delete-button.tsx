import { Trash } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteButton() {
    return (
        <Button variant="ghost" size="icon" className="text-gray-400 bg-gray-50 border border-gray-200 hover:text-blue-500 hover:bg-blue-50">
            <Trash className="w-4 h-4" />
        </Button>
    );
}
