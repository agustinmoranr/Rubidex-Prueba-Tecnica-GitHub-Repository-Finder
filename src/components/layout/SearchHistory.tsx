import { ArrowRight, Clock } from 'lucide-react';
import { useSearchStore } from '../../stores/useSearchStore';
import Button from '../ui/Button';

export function SearchHistory() {
	const searchHistory = useSearchStore((state) => state.searchHistory);
	const setSearchUsername = useSearchStore((state) => state.setSearchUsername);

	return (
		<aside className='border-r border-r-text/15 min-h-full w-69 shrink-0'>
			<div className='flex items-center gap-1 py-3 border-b border-text/15 px-4'>
				<Clock className='size-4' />
				<h2 className='font-medium'>Historial de búsqueda</h2>
				{searchHistory.length > 0 && (
					<span className='bg-accent size-4 rounded-full text-xs text-background font-semibold text-center'>
						{searchHistory.length}
					</span>
				)}
			</div>
			<ul className='px-4'>
				{searchHistory.map((searchUsername) => (
					<li key={searchUsername}>
						<Button
							onClick={() => setSearchUsername(searchUsername)}
							className='group w-full bg-transparent text-accent hover:bg-secondary/35 '>
							{searchUsername}
							<ArrowRight className='opacity-0 group-hover:opacity-100 transition-opacity ease-[ease]' />
						</Button>
					</li>
				))}
			</ul>
		</aside>
	);
}

export default SearchHistory;
