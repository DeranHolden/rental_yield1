export const Select = ({ children, onValueChange, defaultValue }) => (
  <select className='border p-2 w-full' onChange={(e) => onValueChange(e.target.value)} defaultValue={defaultValue}>
    {children}
  </select>
);
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
export const SelectTrigger = ({ children }) => <>{children}</>;
export const SelectValue = ({ placeholder }) => <>{placeholder}</>;
export const SelectContent = ({ children }) => <>{children}</>;