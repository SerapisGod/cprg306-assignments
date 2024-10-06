import Link from "next/link";

export default function Page() {
    return(
        <main>
            <h1 style={{fontSize:'32px'}}>CPRG-306 Web Dev 2 - Assignments</h1>
            <div style={{display: 'flex', flexDirection:'column'}}>
                <Link href="/week-2">Week 2 Assignment Link</Link>
                <Link href="/week-3">Week 3 Assignment Link</Link>
                <Link href="/week-4">Week 4 Assignment Link</Link>
            </div>
        </main>
    );
};