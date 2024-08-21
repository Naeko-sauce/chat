import { PiLightningFill, PiShootingStarFill } from "react-icons/pi";

export default function ModelSelect() {
    const models = [
        {
            id: "gpt-3",
            name: "GPT-3",
            icon: PiLightningFill,
        },
        {
            id: "gpt-4",
            name: "GPT-4",
            icon: PiShootingStarFill,
        },
    ];

    return (
        <div className="flex justify-center dark:bg-gray-800 p-1 rounded">
            {models.map((item) => (
                <button
                    key={item.id}
                    className="group hover:text-gray-900 hover:dark:text-gray-100 flex justify-center items-center space-x-2 py-2.5 min-w-[148px] text-sm font-medium border rounded-lg"
                >
                    <span>
                        <item.icon />
                    </span>
                    <span>{item.name}</span>
                </button>
            ))}
        </div>
    );
}
