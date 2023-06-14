import cardLayoutStyles from './information-layout.module.scss';

function Cardlayout({ children }: { children: React.ReactNode }) {
  return <div className={cardLayoutStyles.informationLayout}>{children}</div>;
}
export default Cardlayout;
