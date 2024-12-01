// Import the Control type from react-hook-form for form control handling
import { Control } from "react-hook-form";

// Import custom UI components for building the form and select elements
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Import the Input component for text inputs
import { Input } from "./ui/input";

// Define props for the CustomFormField component
type CustomFormFieldProps = {
  name: string; // The name of the form field (used for binding and labeling)
  control: Control<any>; // Control object from react-hook-form to manage form state
};

// A reusable form field component for handling text inputs
export function CustomFormField({ name, control }: CustomFormFieldProps) {
  return (
    <FormField
      control={control} // Pass the react-hook-form control for managing form state
      name={name} // Bind the field to the specified form field name
      render={({ field }) => (
        <FormItem>
          {" "}
          {/* Wrapper for the form field components */}
          <FormLabel className="capitalize">{name}</FormLabel>{" "}
          {/* Display the field name as the label */}
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage /> {/* Display validation messages if any */}
        </FormItem>
      )}
    />
  );
}

// Type definition for props used in the CustomFormSelect component
type CustomFormSelectProps = {
  name: string; // The name of the form field for binding
  control: Control<any>; // react-hook-form control for managing form state
  items: string[]; // Array of items to be displayed in the dropdown
  labelText?: string; // Optional custom label for the field
};

// A reusable form field component for handling select dropdowns
export function CustomFormSelect({
  name,
  control,
  items,
  labelText,
}: CustomFormSelectProps) {
  return (
    <FormField
      control={control} // Pass the react-hook-form control for managing form state
      name={name} // Bind the field to the specified form field name
      render={({ field }) => (
        <FormItem>
          {" "}
          {/* Wrapper for the form field components */}
          <FormLabel className="capitalize">{labelText || name}</FormLabel>{" "}
          {/* Display a custom or default label */}
          <Select
            onValueChange={field.onChange} // Update the form field value when an item is selected
            defaultValue={field.value} // Set the initial value of the dropdown
          >
            <FormControl> 
              <SelectTrigger> {/* Component to open the dropdown */}
                <SelectValue /> {/* Display the currently selected value */}
              </SelectTrigger>
            </FormControl>
            <SelectContent> {/* Container for the dropdown items */}
              {items.map((item) => {
                return (
                  <SelectItem key={item} value={item}> {/* Render each dropdown item */}
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <FormMessage /> {/* Display validation messages if any */}
        </FormItem>
      )}
    />
  );
}
export default CustomFormSelect;
