import { Resource } from "sst";

export default function Home() {
  const res = Resource.Api.url;
  console.log(res);
  return (
   <div>
    test
   </div>
  );
}
