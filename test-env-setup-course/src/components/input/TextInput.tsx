import {useState, type ChangeEvent} from 'react';
import {Button} from '../ui/button';

const TextInput = () => {
  const [text, setText] = useState<string>('');
  return (
    <div>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        value={text}
        placeholder="Enter some text"
        className="border border-gray-500"
      />
      <p>{text}</p>
      <Button>Click me</Button>
    </div>
  );
};

export default TextInput;
