import type { InputHTMLAttributes } from 'react';
import { cn } from '../utils/cn';
import Input from './ui/Input';
import { Search } from 'lucide-react';

interface SearchInputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	onChange: (value: string) => void;
}

export function SearchInput({
	value,
	onChange,
	name,
	placeholder,
	id,
	className,
	...props
}: SearchInputProps) {
	const handleOnChange = (
		e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
	) => {
		if (typeof onChange === 'function') {
			onChange(e.target.value);
		}
	};

	const _id = id ?? name;

	return (
		<div className='flex items-center border border-text/35 rounded-md pl-2  focus-within:border-accent'>
			<label htmlFor={_id}>
				<Search className='text-text/65' />
			</label>
			<Input
				id={_id}
				name={name}
				type='text'
				value={value}
				onChange={handleOnChange}
				placeholder={placeholder}
				className={cn(
					'px-2 rounded-md h-10 focus-visible:outline-none',
					className,
				)}
				{...props}
			/>
		</div>
	);
}
