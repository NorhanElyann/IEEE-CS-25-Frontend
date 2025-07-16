import MemberCard from "./MemberCard";
import { members } from "../data/members";

export default function TeamGrid() {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 max-w-6xl mx-auto">
        {members.map((member, idx) => (
            <MemberCard key={idx} member={member} />
        ))}
        </div>
    );
}
