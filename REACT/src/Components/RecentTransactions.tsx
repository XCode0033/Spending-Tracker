import { formatSpentAt } from "../lib/formatDate";

interface Props {
    title: string;
    amount: number;        // cents
    spent_at?: string;     // ISO string from the API
}

const RecentTransactions = ({ title, amount, spent_at }: Props) => {
    return (
        <div className="mt-5 w-90">
            <div className="flex justify-between mb-2">
                <h3 className="font-bold">Recent Transactions</h3>
                <a href="/viewAll" className="text-accent text-sm">View All</a>
            </div>

            <div className="flex justify-between rounded-lg bg-surface p-3">
                <div className="flex flex-col">
                    <p className="font-medium">{title}</p>
                    {spent_at && (
                        <span className="text-xs text-text-muted">{formatSpentAt(spent_at)}</span>
                    )}
                </div>
                <p>-${(amount / 100).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default RecentTransactions;
