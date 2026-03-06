import { Github } from 'lucide-react';
import SearchRepositoriesForm from '../../pages/SearchRepositoriesPage/forms/SearchRepositoriesForm';

export function Header() {
	return (
		<header className='backdrop-blur-sm sticky top-0 z-10 border-b border-b-text/15'>
			<div className='flex items-center px-6 py-4'>
				<div className='flex items-center gap-2'>
					<div className='inline-flex items-center justify-center size-9 bg-accent/15 rounded-md'>
						<Github />
					</div>
					<h1 className='text-sm font-medium'>
						Buscador de Repositorios <br /> en Github
					</h1>
				</div>
				<div className='flex flex-1'>
					<SearchRepositoriesForm />
				</div>
			</div>
		</header>
	);
}

export default Header;
