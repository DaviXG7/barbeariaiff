import {FormEvent} from "react";

async function submit(event: FormEvent, id: string, method: string, url: string) : Promise<{}> {
  event.preventDefault()

  const formHTML = document.getElementById(id) as HTMLFormElement;

  if (!formHTML) {
    console.error("Formulário não encontrado!");
    return {};
  }

  const form = new FormData(formHTML);

  const formObject: Record<string, any> = {};
  form.forEach((value, key) => {
    formObject[key] = value;
  });

  const response = await fetch("http://localhost/" + url, {
    method: method,
    body: JSON.stringify(formObject),
  })

  return response.json();
}


export default function Form(props: {
  id: string;
  method: string;
  action: string;
  children: any;
  styles?: string;
  onRespose?: (param: {}) => void | undefined;
}) {
  return (
    <form encType={"multipart/form-data"} id={props.id} action={props.method} method={props.action} className={props.styles === undefined ? "loginform" : props.styles} onSubmit={(event) => { submit(event, props.id, props.method, props.action).then(r => { if (props.onRespose) props.onRespose(r); })}}>
      {props.children}
    </form>
  );
}
