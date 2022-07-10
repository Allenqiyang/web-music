import React, { memo } from 'react'

import {getSizeImage} from "@/utils/data-format"

import { TopRankingWrapper } from './style'

const TopRanking = memo((props) => {
  const {info, index, list} = props
  console.log(info)
  return (
    <TopRankingWrapper>
      <div className='header'>
        <div className='image'>
          <img src={getSizeImage(info[index].coverImgUrl)} alt="" />
          <a href='/todo' className='image-cov'> </a>
        </div>
        <div className='info'>
          <a href='/todo'>{info[index].name}</a>
          <div>
            <button className='btn play sprite_02'></button>
            <button className='btn favor sprite_02'></button>
          </div>
        </div>
      </div>
      <div className='list'>
        {
          list.map((item, index) => {
            return (
              <div key={item} className="list-item">
                <div className='rank'>{index + 1}</div>
                <div className='name'>{item}</div>
                <div className='operate'>
                  <button className='btn sprite_02 play'></button>
                  <button className='btn sprite_icon2 addto'></button>
                  <button className='btn sprite_02 favor'></button>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='footer'></div>
    </TopRankingWrapper>
  )
})

export default TopRanking