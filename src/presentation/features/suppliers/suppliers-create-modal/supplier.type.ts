export type CREATE_SUPPLIER = {
  razaoSocial: string;
  nomeFantasia: string;
  cnpj: string;
  telefone: string;
  email: string;
};

export type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (supplier: CREATE_SUPPLIER) => void | Promise<void>;
};
