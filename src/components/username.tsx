import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const UsernameSelection = () => {
  const [username, setUsername] = useState("Utsavrai1");

  const handleUsernameChange = (value: string) => {
    setUsername(value);
  };

  return (
    <div className="space-y-2 py-4">
      <Select value={username} onValueChange={handleUsernameChange}>
        <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0">
          <SelectValue placeholder="Select user" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="UtkarshDhairyaPanwar">
              UtkarshDhairyaPanwar
            </SelectItem>
            <SelectItem value="Utsavrai1">Utsavrai1</SelectItem>
            <SelectItem value="raiutsav">Raiutsav</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default UsernameSelection;
