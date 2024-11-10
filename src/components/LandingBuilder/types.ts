export interface FormField {
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label: string;
  name: string;
  required: boolean;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
}