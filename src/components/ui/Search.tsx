import { Input } from './Inputs';
import { Button } from './Botton';
import { cn } from '@/lib/utils';


export interface ISearchProps {
  inputClassName?: string;
  buttonClassName?: string;
  className?: string;
}

export function Search ({buttonClassName, inputClassName , className}: ISearchProps) {
  return (
    <div  
      className={cn(
          "relative flex items-center",
          className
        )}  
    >
        <Input placeholder='Tapez ici...'
          className={cn(
          "w-[450px] rounded-[21px] px-4 py-6 text-[#A0A0A0]",
          inputClassName
        )}
          />
        <Button 
          className={cn(
          "absolute right-0 my-auto translate-x-[-5px] capitalize",
          buttonClassName
        )}
          variant={"default"}
        >
          rechercher
        </Button>
    </div>
  );
}
