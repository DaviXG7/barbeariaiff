export default function Form(props: {
  method: string;
  action: string;
  children: any;
}) {
  return (
    <form action={props.method} method={props.action} className="loginform">
      {props.children}
    </form>
  );
}
