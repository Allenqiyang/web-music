/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { memo } from 'react'

import { footerLinks, footerImages } from "@/common/local-data"

import {FooterWrapper, FooterLeft, FooterRight} from './style'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        {/* 左侧内容 */}
        <FooterLeft>
          <div className="links">
            {footerLinks.map((item, index) => {
              return (
                <div className="links-item" key={item.title}>
                  <a href={item.link} key={item.title} target="blank">
                    {item.title}
                  </a>
                  <span>|</span>
                </div>
              );
            })}
          </div>
          <div className="text">
            <p>
              <span>网易公司版权所有©1997-2020</span>
              <span>杭州乐读科技有限公司运营：</span>
              <a
                href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
                target="_blank"
              >
                浙网文[2018]3506-263号
              </a>
            </p>
            <p>
              <span>违法和不良信息举报电话：0571-89853516</span>
              <span> 举报邮箱：</span>
              <a href="ncm5990@163.com" target="_blank">
                ncm5990@163.com
              </a>
            </p>
            <p>
              <span>粤B2-20090191-18</span>
              <a
                href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
                target="_blank"
              >
                <span>工业和信息化部备案管理系统网站</span>
              </a>
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
                target="_blank"
              >
                <span>浙公网安备 33010902002564号</span>
              </a>
            </p>
          </div>

        </FooterLeft>
        {/* 右侧内容 */}
        <FooterRight>
          <ul className="links">
            {footerImages.map((item, index) => {
              return (
                <li key={item.link}>
                  <a className="item" href={item.link} target="blank"></a>
                  <span className="title"></span>
                </li>
              );
            })}
          </ul>
          {/* <div className="links">
          <div>
            <a
              className="unit"
              href="https://web-amped.music.163.com/"
              target="_blank"
            ></a>
            <span className="title"></span>
          </div>
        </div> */}
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter