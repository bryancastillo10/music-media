import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InputBlockProps<T> {
  label: T;
  id: T;
  type: T;
  placeholder?: T;
}

const InputBlock = ({label, id, type, placeholder="Placeholder"}: InputBlockProps<string>) => {
  return(
      <div className="grid gap-3">
        <Label htmlFor="email">{label}</Label>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          required
        />
      </div>
  )
};

export default InputBlock;