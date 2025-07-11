import { type Member } from "../interfaces/Member";

interface Props {
    member: Member;
}

export default function MemberCard({ member }: Props) {
    return (
        <div className="bg-white p-6 rounded-lg text-center border-2 border-gray-300 hover:border-blue-600 hover:shadow-xl">
            <img
                src={member.avatarUrl}
                alt={member.name}
                className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-blue-600"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">
                {member.role} — {member.department}
            </p>
            <p className="text-sm italic my-2">{member.bio}</p>
            <p className="text-xs text-gray-500 mb-4">Joined on {member.joinedDate}</p>
            <div className="flex justify-center gap-2">
                <a
                href={member.email}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded"
                >
                Email
                </a>
                {member.linkedin && (
                <a
                    href={member.linkedin}
                    className="px-3 py-1  text-blue-600 text-sm rounded"
                >
                    LinkedIn
                </a>
                )}
            </div>
        </div>
    );
}
