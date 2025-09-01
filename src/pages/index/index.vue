<template>
  <view>
    <AppHeader />
    <view class="index" style="position: relative;top: -1px;">
      <!-- 顶部横幅 -->
      <view class="banner">
        <image class="banner-bg" src="../../../assets/img/bar.png" mode="aspectFill" />
        
      </view>

            <!-- 数据统计和上传按钮 -->
      <view class="stats-section">
        <view class="stats-card">
          <view class="stats-card__grid">
            <view class="cell">
              <text class="cell-label">比赛剩余时间</text>
              <view class="cell-value"><text class="num">18</text><text class="unit"> 天 </text><text class="num">22</text><text class="unit"> 小时</text></view>
            </view>
            
            <view class="cell">
              <text class="cell-label">比赛报名人数</text>
              <text class="cell-value"><text class="num">3305</text></text>
            </view>
            
            <view class="cell">
              <text class="cell-label">上传作品数量</text>
              <text class="cell-value"><text class="num">1245</text></text>
            </view>
          </view>
          <view class="stats-card__upload">
            <view class="upload-btn">
              <text class="upload-icon">⬆︎</text>
              <text class="upload-text">上传作品</text>
            </view>
            <text class="deadline">(截止于:2025年9月29日 00:00)</text>
          </view>
        </view>
      </view>

      <!-- 比赛公告区域 -->
      <view class="announcement-section">
        <view class="announcement-card">
          <view class="announcement-header">
            <image style="width: 134px;height: 68px;" class="announcement-icon" src="../../../assets/icon/gg.png" mode="aspectFit" />
          </view>
          
          <view class="announcement-content">
            <div class="announcement-text">
              <div>为了传承中秋团圆的美好仪式感,</div>
              <div>展现生活中温暖动人的真实瞬间,</div>
              <div>习酒携2025年度主题"光影中秋·团圆中国",</div>
              <div>隆重发起短视频创作大赛,</div>
              <div>邀请全国创作者用镜头记录属于你的中秋故事。</div>
            </div>
          </view>
          
          <view class="timeline-section">
            <view class="timeline-grid">
              <view class="timeline-item">
                <text class="timeline-stage">作品征集</text>
                <text class="timeline-year">2025</text>
                <text class="timeline-date">09.08 - 10.08</text>
              </view>
              
              <image class="timeline-arrow" src="../../../assets/icon/jt.png" mode="aspectFit" />
              
              <view class="timeline-item">
                <text class="timeline-stage">评奖</text>
                <text class="timeline-year">2025</text>
                <text class="timeline-date">10.09 - 10.15</text>
              </view>
              
              <image class="timeline-arrow-vertical" src="../../../assets/icon/jt.png" mode="aspectFit" />
              
              <view class="timeline-item" style="margin-top: 16px;">
                <text class="timeline-stage">奖项公布</text>
                <text class="timeline-year">2025</text>
                <text class="timeline-date">10.16 - 10.20</text>
              </view>
              
              <image class="timeline-arrow timeline-arrow-down" src="../../../assets/icon/jt.png" mode="aspectFit" />
              
              <view class="timeline-item" style="margin-top: 16px;">
                <text class="timeline-stage">颁奖</text>
                <text class="timeline-year">2025</text>
                <text class="timeline-date">10.25</text>
              </view>
            </view>
          </view>
        </view>
        
      </view>

      <!-- 大赛主题选择区域 -->
      <view class="theme-section">
        <view class="theme-header">
          <image class="theme-title-icon" src="../../../assets/icon/zt.png" mode="aspectFit" />
        </view>
        
        <view class="theme-grid">
          <image class="theme-bg" src="../../../assets/img/cc.png" mode="aspectFill" />
          <image class="theme-bg" src="../../../assets/img/xs.png" mode="aspectFill" />
          <image class="theme-bg" src="../../../assets/img/fy.png" mode="aspectFill" />
          <image class="theme-bg" style="position: relative;
    left: 55%;" src="../../../assets/img/rw.png" mode="aspectFill" />
          <image style="position: relative;right: 55%;" class="theme-bg" src="../../../assets/img/cy.png" mode="aspectFill" />
        </view>
      </view>

      <!-- 奖项设置区域 -->
      <view class="award-section">
        <view class="award-header">
          <text class="award-title">奖项设置</text>
          <view class="award-subtitle">
            <text class="subtitle-left">JIAN</text>
            <text class="subtitle-right">ZHI</text>
          </view>
        </view>
        
        <view class="award-table">
          <view class="table-header">
            <text class="header-tier">奖项档次</text>
            <text class="header-name">奖项名称</text>
            <text class="header-quantity">数量</text>
            <text class="header-prize">单人奖金</text>
          </view>
          
          <!-- 荣誉奖 -->
          <view class="award-group">
            <view class="award-row" style="height: 75rpx;">
              <text class="award-tier blue"></text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/ndjj.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">1</text>
              <text class="award-prize">¥50,000</text>
            </view>
            
            <view class="award-row" style="height: 75rpx;">
              <text class="award-tier blue">荣誉奖</text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/ndyj.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">2</text>
              <text class="award-prize">¥40,000</text>
            </view>
            
            <view class="award-row"  style="border-bottom: 1rpx solid #AFCBE8;height: 75rpx;">
              <text class="award-tier blue"></text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/ndtj.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">3</text>
              <text class="award-prize">¥30,000</text>
            </view>
          </view>
          
          <!-- 主题奖 -->
          <view class="award-group">
            <view class="award-row">
              <text class="award-tier"></text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/gyzx.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">2</text>
              <text class="award-prize">¥20,000</text>
            </view>
            
            <view class="award-row">
              <text class="award-tier"></text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/gyzx.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">2</text>
              <text class="award-prize">¥20,000</text>
            </view>
            
            <view class="award-row">
              <text class="award-tier">主题奖</text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/gyzx.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">2</text>
              <text class="award-prize">¥20,000</text>
            </view>
            
            <view class="award-row">
              <text class="award-tier"></text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/gyzx.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">2</text>
              <text class="award-prize">¥20,000</text>
            </view>
            
            <view class="award-row">
              <text class="award-tier"></text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/gyzx.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">2</text>
              <text class="award-prize">¥20,000</text>
            </view>
          </view>
          
          <!-- 优秀奖 -->
          <view class="award-group">
            <view class="award-row">
              <text class="award-tier">优秀奖</text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/yxzpj.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">8</text>
              <text class="award-prize">¥10,000</text>
            </view>
            
            <view class="award-row">
              <text class="award-tier"></text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/zjcbj.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">6</text>
              <text class="award-prize">¥10,000</text>
            </view>
          </view>
          
          <!-- 人气奖 -->
          <view class="award-group">
            <view class="award-row">
              <text class="award-tier">人气奖</text>
              <view class="award-name">
                <image class="award-icon" src="../../../assets/icon/zjrqj.png" mode="aspectFit" />
              </view>
              <text class="award-quantity">10</text>
              <text class="award-prize">¥8,000</text>
            </view>
          </view>
        </view>
        
        <view class="award-footer">
          <text class="award-rules">
            光影创作人每件作品只能获得一个奖项,按照荣誉奖、主题奖、优秀奖及最佳传播奖从上至下的优先级进行获奖,确保评选的公平性与参与度。
          </text>
          <view class="award-link">
            <text class="link-text">查看更多参赛资料</text>
            <text class="link-arrow">→</text>
          </view>
        </view>
      </view>

    </view>
  </view>
</template>

<script setup>
</script>

<style lang="scss">
.index {
  .banner {
    position: relative;
    height: 300rpx;
    overflow: hidden;
    
    .banner-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    
    .banner-content {
      position: relative;
      z-index: 2;
      display: flex;
      height: 100%;
      padding: 40rpx 30rpx;
      
      .banner-left {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        
        .wine-bottle {
          width: 120rpx;
          height: 200rpx;
        }
      }
      
      .banner-right {
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30rpx;
        
        .main-title {
          font-size: 48rpx;
          color: #ffffff;
          font-weight: bold;
          margin-bottom: 10rpx;
        }
        
        .sub-title {
          font-size: 28rpx;
          color: #ffffff;
          opacity: 0.9;
          margin-bottom: 8rpx;
        }
        
        .contest-title {
          font-size: 24rpx;
          color: #ffffff;
          opacity: 0.8;
          margin-bottom: 15rpx;
        }
        
        .sponsor-logos {
          .sponsor-text {
            font-size: 20rpx;
            color: #ffffff;
            opacity: 0.7;
          }
        }
      }
    }
  }

  .stats-section {
    background: #DCEDFF;
    padding: 40rpx 20rpx 0 20rpx;

    .stats-card {
      padding: 0rpx 30rpx;
      background-color: #EFF6FF;
      border-radius: 10rpx;
      overflow: hidden;
      border: 2rpx solid #d0e3ff;
      position: relative;
      top: -70px;
      z-index: 80;
      
      &__grid {
        display: flex;
        align-items: stretch;
        padding: 24rpx 0 10rpx 24rpx;
        justify-content: space-between;
        .cell {
          padding: 0 12rpx;
        }

        .divider {
          width: 2rpx;
          background: #e5f1ff;
          margin: 0 8rpx;
        }

        .cell-label {
          display: block;
          font-size: 24rpx;
          color: #333;
          margin-bottom: 8rpx;
          text-align: left;
        }

        .cell-value {
          display: flex;
          align-items: baseline;
          justify-content: flex-start;
          .num {
            font-size: 45rpx;
            color: #1d4fae;
            font-weight: 800;
          }
          .unit {
            font-size: 22rpx;
            color: #1d4fae;
            margin: 0 6rpx;
          }
        }
      }

      &__upload {
        padding: 18rpx 20rpx 24rpx;
        text-align: center;

        .upload-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 520rpx;
          height: 80rpx;
          background: linear-gradient(180deg, #2d7ce0 0%, #1b64b9 100%);
          color: #fff;
          border-radius: 50rpx;
          box-shadow: 0 6rpx 12rpx rgba(29, 100, 185, 0.35);
        }
        .upload-icon {
          margin-right: 10rpx;
          font-size: 28rpx;
        }
        .upload-text {
          font-size: 28rpx;
          font-weight: 700;
        }
        .deadline {
          display: block;
          margin-top: 15rpx;
          font-size: 22rpx;
          color: #8aa0c1;
        }
      }
    }
  }

  .announcement-section {
    background: #DCEDFF;
    padding: 40rpx 30rpx;
    position: relative;
    
    .announcement-card {
      overflow: hidden;
      padding: 0 40rpx 30rpx;
      position: relative;
      top: -70px;
      .announcement-header {
        text-align: center;
        
        .announcement-title {
          font-size: 52rpx;
          color: #1976d2;
          font-weight: bold;
          display: block;
          margin-bottom: 8rpx;
        }
        
        .announcement-subtitle {
          font-size: 20rpx;
          color: #8d6e63;
          display: block;
          letter-spacing: 4rpx;
          font-weight: 500;
          text-transform: uppercase;
        }
      }
      
      .announcement-content {
        padding: 0 20rpx 5px 20rpx;
        margin-bottom: 30rpx;
        border-radius: 8rpx;
        .announcement-text {
          font-size: 28rpx;
          color: #456F93;
          line-height: 1.8;
          text-align: justify;
          font-weight: 400;
          text-align: center;
        }
      }
      
      .timeline-section {
        position: relative;
        
        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          grid-template-rows: auto auto;
          gap: 20rpx;
          align-items: center;
          justify-content: center;
          padding: 0 30rpx;
          .timeline-item {
            border-radius: 12rpx;
            padding: 20rpx 16rpx;
            text-align: center;
            border: 1rpx solid #bbdefb;
            width: 225rpx;
            .timeline-stage {
              display: block;
              font-size: 24rpx;
              color: #1976d2;
              font-weight: bold;
              margin-bottom: 8rpx;
            }
            
            .timeline-year {
              display: block;
              font-size: 26rpx;
              color: #DB9C3D;
              margin-bottom: 6rpx;
              font-weight: 300;
            }
            
            .timeline-date {
              display: block;
              font-size: 34rpx;
              color: #1976d2;
              font-weight: bold;
              font-style: italic;
            }
          }
          
          .timeline-arrow {
            width: 24rpx;
            height: 24rpx;
            justify-self: center;
            
            &.timeline-arrow-down {
              transform: rotate(180deg);
            }
          }
          
          .timeline-arrow-vertical {
            position: absolute;
            right: 122rpx;
            top: 47%;
            width: 24rpx;
            height: 24rpx;
            transform: rotate(90deg);
          }
          
          /* 正确的2x2网格布局 */
          .timeline-item:nth-child(1) {
            grid-column: 1;
            grid-row: 1;
          }
          
          .timeline-item:nth-child(3) {
            grid-column: 3;
            grid-row: 1;
          }
          
          .timeline-item:nth-child(5) {
            grid-column: 1;
            grid-row: 2;
          }
          
          .timeline-item:nth-child(7) {
            grid-column: 3;
            grid-row: 2;
          }
          
          .timeline-arrow:nth-child(2) {
            grid-column: 2;
            grid-row: 1;
          }
          
          .timeline-arrow:nth-child(6) {
            grid-column: 2;
            grid-row: 2;
          }
        }
      }
    }
    
    .number-badge {
      position: absolute;
      top: 20rpx;
      right: 30rpx;
      width: 60rpx;
      height: 60rpx;
      background: #e3f2fd;
      border: 2rpx solid #1976d2;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      .badge-icon {
        width: 40rpx;
        height: 40rpx;
      }
    }
  }
  }

  .theme-section {
    background: url(../../../assets/img/bg3.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 40rpx 30rpx;
    position: relative;
    height: 950px;
    
    .theme-header {
      text-align: center;
      margin-top: 20px;
      .theme-title-icon {
        width: 208rpx;
        height: 132rpx;
        margin-bottom: 10rpx;
      }
      
      .theme-subtitle {
        font-size: 20rpx;
        color: #ffffff;
        opacity: 0.8;
        letter-spacing: 4rpx;
        font-weight: 500;
        text-transform: uppercase;
      }
    }
    
    .theme-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 20rpx;
      margin-top: 10rpx;
      .theme-bg {
        width: 100%;
        height: 352rpx;
        border-radius: 16rpx;
        object-fit: cover;
      }
      
      /* 正确的布局：第一行3个，第二行2个 */
      .theme-bg:nth-child(1) {
        grid-column: 1;
        grid-row: 1;
      }
      
      .theme-bg:nth-child(2) {
        grid-column: 2;
        grid-row: 1;
      }
      
      .theme-bg:nth-child(3) {
        grid-column: 3;
        grid-row: 1;
      }
      
      .theme-bg:nth-child(4) {
        grid-column: 1;
        grid-row: 2;
      }
      
      .theme-bg:nth-child(5) {
        grid-column: 3;
        grid-row: 2;
      }
    }
  }

  .award-section {
    background: #DCEDFF;
    padding: 40rpx 30rpx;
    
    .award-header {
      text-align: center;
      margin-bottom: 40rpx;
      position: relative;
      
      .award-title {
        font-size: 48rpx;
        color: #1976d2;
        font-weight: bold;
        display: block;
        margin-bottom: 10rpx;
        position: relative;
        z-index: 2;
      }
      
      .award-subtitle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60rpx;
        
        .subtitle-left {
          font-size: 20rpx;
          color: #FFD700;
          font-weight: 500;
        }
        
        .subtitle-right {
          font-size: 20rpx;
          color: #FFD700;
          font-weight: 500;
        }
      }
      
      &::before {
        content: '';
        position: absolute;
        top: -10rpx;
        left: 50%;
        transform: translateX(-50%);
        width: 200rpx;
        height: 60rpx;
        background: rgba(255, 215, 0, 0.1);
        border-radius: 8rpx;
        z-index: 1;
      }
    }
    
    .award-table {
      background: #DCEDFF;
      overflow: hidden;
      margin-bottom: 30rpx;
      
      .table-header {
        display: flex;
        padding: 20rpx 20rpx;
        background: #C9E1FA;
        border-bottom: 2rpx solid #e0e0e0;
        
        .header-tier {
          flex: 1;
          font-size: 28rpx;
          color: #0E57A3;
          font-weight: 400;
          text-align: left;
        }
        
        .header-name {
          flex: 2;
          font-size: 28rpx;
          color: #0E57A3;
          font-weight: 400;
          text-align: left;
        }
        
        .header-quantity {
          flex: 1;
          font-size: 28rpx;
          color: #0E57A3;
          font-weight: 400;
          text-align: center;
        }
        
        .header-prize {
          flex: 1;
          font-size: 28rpx;
          color: #0E57A3;
          font-weight: 400;
          text-align: right;
        }
      }
      
      .award-group {
        .award-row {
          display: flex;
          align-items: center;
          height: 100px;
          &:last-child {
            border-bottom: none;
          }
          
          .award-tier {
            flex: 1;
            font-size: 26rpx;
            color: #333333;
            font-weight: bold;
            text-align: left;
            padding: 39rpx 20rpx;
            border-right: 1rpx solid #AFCBE8;
          }
          .blue{
            text-align: center;
            font-size: 28rpx;
            color: #366DA7;
            font-weight: 400;
          }
          
          .award-name {
            flex: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            
            .award-icon {
              width: 240rpx;
              height:120rpx;
            }
          }
          
          .award-quantity {
            flex: 1;
            font-size: 26rpx;
            color: #333333;
            font-weight: 500;
            text-align: center;
          }
          
          .award-prize {
            flex: 1;
            font-size: 26rpx;
            color: #333333;
            font-weight: 500;
            text-align: right;
          }
        }
      }
    }
    
    .award-footer {
      text-align: center;
      
      .award-rules {
        font-size: 24rpx;
        color: #999999;
        line-height: 1.6;
        margin-bottom: 30rpx;
        display: block;
      }
      
      .award-link {
        display: inline-flex;
        align-items: center;
        gap: 10rpx;
        color: #1976d2;
        font-size: 28rpx;
        font-weight: 500;
        
        .link-text {
          color: #1976d2;
        }
        
        .link-arrow {
          color: #1976d2;
          font-weight: bold;
        }
      }
    }
  }
</style>
