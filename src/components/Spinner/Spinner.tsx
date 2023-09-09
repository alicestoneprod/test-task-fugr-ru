import s from "./spinner.module.scss"
export const Spinner: React.FC = () => {
  return <div className={s.loader}></div>
}
export const SpinnerBig: React.FC = () => {
  return <div className={s.loaderBig}></div>
}
