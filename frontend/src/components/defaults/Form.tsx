async function submit(method: string, url: string, body: {}) {
  const response = await fetch("https://localhost:80/" + url, {
    method: method,
    body: JSON.stringify(body)
  });
}


export default function Form(props: {
  method: string;
  action: string;
  children: any;
}) {
  return (
    <form action={props.method} method={props.action} className="loginform" onSubmit={props.method, props.action}>
      {props.children}
    </form>
  );
}
