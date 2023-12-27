export default function Introduce({companyInfo}: any) {
  return (
    <li className="flex gap-3">
      <span className="font-bold">{companyInfo[0]}</span>
      <span>{companyInfo[1]}</span>
    </li>
  );
}
