import styles from './index.module.scss';

export default function Footer() {
  return (
    <div className="flex flex-col justify-between items-center h-[500px] bg-[#F6F6F7]">
      <div className="md:max-w-[1280px]  m-auto">footer</div>
      <div className={styles.beian}>
        <a href="https://beian.miit.gov.cn">浙ICP备2023025627号-1</a>
      </div>
      <div className={styles.copyright}>2023-present @bitou</div>
    </div>
  );
}
