import { Divider } from 'antd';
import Link from 'next/link';
import styles from './index.module.scss';

// 页脚
export default function Footer() {
  return (
    <footer className="flex flex-col justify-between items-center h-[500px]  bg-[#121127]  text-white sm:h-full">
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.ads}>笔头，全流程的站点管理</div>
          <div className={styles.menu}>
            <ul className={styles.first}>
              {[
                {
                  title: '系统状态',
                  children: [
                    { title: 'bitou', version: '0.1.0' },
                    { title: 'bitou-writer', version: '0.1.0' },
                    { title: 'bitou-cli', version: '0.1.0' },
                    { title: 'bitou-tracer', version: '0.1.0' },
                  ],
                },
                {
                  title: '更多产品',
                  children: [
                    { title: '数据实验工具', link: '/docs/data_experiment' },
                    { title: 'AI 命令行', link: '/docs/ai_cli' },
                    { title: '组件库', link: '/docs/component' },
                    { title: '扩展', link: '/docs/extension' },
                    { title: '其他' },
                  ],
                },
                {
                  title: '更多',
                  children: [
                    { title: '文档'，link: 'https://pen.bitou.tech/' },
                    { title: '反馈' },
                    { title: '社区' },
                  ],
                },
              ].map((item, index) => {
                return (
                  <li key={index} className={styles.first_item}>
                    <h3 className={styles.first_title}>{item.title}</h3>
                    <ul className={styles.second}>
                      {item.children.map((item: any, index) => {
                        return (
                          <li key={index} className={styles.second_item}>
                            <Link href={`${item.link}`}>
                              {item.title}{' '}
                              {item.version && (
                                <>
                                  <Divider
                                    type="vertical"
                                    style={{ backgroundColor: '#fff' }}
                                  />
                                  {item.version}
                                </>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
          <Divider />
          <div className={styles.beian}>
            <a href="https://beian.miit.gov.cn">浙ICP备2023025627号-1</a>
          </div>
          <div className={styles.copyright}>2023-present @bitou</div>
        </div>
      </div>
    </footer>
  );
}
