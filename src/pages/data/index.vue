<template>
  <view>
    <AppHeader />
    <view class="index" style="position: relative;top: -1px;">
      <!-- 顶部横幅 -->
      <view class="banner">
        <image class="banner-bg" src="../../../assets/img/bar.png" mode="aspectFill" />
      </view>

      <view class="bg">
        <!-- 顶部导航栏 -->
        <view class="top-nav">
          
          <!-- 右侧下载按钮 -->
          <view class="download-btn" @click="goToMaterials">
            <image class="download-icon" src="../../../assets/icon/download.webp" mode="aspectFit" />
            <text class="download-text">下载大赛手册</text>
          </view>
        </view>

        <!-- 主要内容区域 -->
        <view class="main-content">
          <view class="title-container">
            <text class="main-title">贵州习酒2025短视频创作大赛</text>
            <text class="sub-title">赛事手册</text>
          </view>
          
          <!-- 手册内容 -->
          <view class="manual-content">
            <!-- 大赛综述 -->
            <view class="section" id="overview">
              <text class="section-title">大赛综述</text>
              <text class="section-content">在新时代文化建设的大背景下，中秋节不仅是一家人团聚的节日，更是弘扬中华文化、促进文化自信与文化认同的重要契机。国家在文化发展中不断强调节日文化与生活美学的融合，推动传统文化与现代社会生活融合发展。习酒持续打造的"中秋夜·喝习酒"IP，正是顺应这一趋势，将文化仪式感与现代生活场景结合，让传统节日焕发新的时代意义。
                </text>
                <text class="section-content">作为"君品文化"的倡导者与践行者，贵州习酒以"弘扬君品文化，酿造生活之美"为使命，传递美好生活方式。"中秋夜·喝习酒"不仅是一种节日仪式，更是君品精神在生活场景中的具象呈现，让每一杯酒都承载着礼仪之美、诚信之道与和谐共生的文化内涵。

本次大赛旨在通过大众创作，记录和呈现中秋节日文化的多样面貌，弘扬家国情怀，传播中华传统节日价值，同时激发全民参与和创造力，让中秋文化在现代生活中生动延续。
在这一杯酒里，有人间烟火，有山河万里；
在这一个中秋，有团圆中国，有生活光影。</text>
<text class="section-content">2025年，贵州习酒以"光影中秋·团圆中国"为年度主题，邀请央级媒体—人民网作为全媒体支持单位，共同发起短视频创作大赛，人民网将依托其权威传播力与全平台资源，在全平台矩阵渠道进行联动报道，助力赛事实现更大范围的全民参与和文化共振。大赛诚邀全国人民用镜头记录中秋里的美好瞬间。这些画面可以是一顿热气腾腾的团圆饭、一段奔赴回家的旅程、一句家常话里的温暖，也可以是一项手艺、一处风景、一份守望。在这一杯酒里，有人间烟火，有山河万里；在这一个中秋，有团圆中国，也有生活光影。</text>
            </view>

            <!-- 大赛主题 -->
            <view class="section" id="theme">
              <text class="section-title">大赛主题</text>
              <view class="section-content no-indent">"中秋夜·喝习酒"——"光影中秋·团圆中国"贵州习酒2025短视频创作大赛
            <view>主办方：贵州习酒</view>
            <view>媒体支持：人民网</view>
            <view>比赛平台：抖音、快手</view>
            <view>媒体支持平台：视频号、小红书、微博</view>
            媒体支持：人民网
            比赛平台：抖音、快手
            媒体支持平台：视频号、小红书、微博
              </view>
            </view>

            <!-- 活动时间 -->
            <view class="section" id="time">
              <text class="section-title">活动时间</text>
              <view class="section-content">作品征集时间：2025年9月8日 12:00 — 2025年10月8日 00:00</view>
<view class="section-content">评奖时间：2025年10月9日 — 2025年10月15日</view>
<view class="section-content">奖项公布时间：2025年10月16日— 2025年10月20日</view>
<view class="section-content">颁奖时间（创作者之夜）：2025年10月23日</view>
<view class="section-content">以上时间安排为初步拟定，若有调整时会以公告形式在赛事专题网站告知。</view>
            </view>

            <!-- 参赛对象 -->
            <view class="section" id="participants">
              <text class="section-title">参赛对象</text>
              <view class="section-content">1 特邀创作者（光影助威官）
由官方邀请的抖音、快手优质短视频达人，作为本次短视频创作大赛的"助威官"，参与主题创作及宣传播排名，助力赛事的传播开展。</view>
<view class="section-content" style="margin-top: 20rpx;">2 开放报名参赛者（光影创作人）
面向所有有短视频拍摄创作意愿的公众用户。通过官网或平台入口报名参赛并传播，提交作品参与评奖。</view>
            </view>

            <!-- 参赛主题 -->
            <view class="section" id="topics">
              <text class="section-title">参赛主题</text>
              <text class="section-content">五大拍摄主题及脚本示意</text>
<view class="section-content">【传承】非遗 / 习俗 / 美食 — 敬烟火里的老味道</view>
<image style="height: 88rpx;" src="../../../assets/img/wdbg1.webp" alt="图片" mode="aspectFit" />
<view class="section-content">▪ 家庭月饼制作：从和面、包馅、印花到出炉，手部特写+慢动作，搭配锅中油炸或烤箱开门的"出炉瞬间"。</view>
<view class="section-content">▪ 非遗匠人故事：拍老街里做灯笼、雕花饼模、捏糖人的师傅，配人物采访或配音旁白，记录手艺背后的情感。</view>
<view class="section-content">▪ 厨房烟火：节日前夜，长辈们在厨房忙碌的场景，光线昏黄、蒸汽氤氲，营造温暖感。</view>

<view class="section-content" style="margin-top: 30rpx;">【叙事】剧情 / 短剧 / 家庭故事 — 敬家国的小团圆</view>
<image style="height: 88rpx;" src="../../../assets/img/wdbg2.webp" alt="图片" mode="aspectFit" />
<view class="section-content">▪ 归途纪实：用手机拍自己回家的火车/飞机/汽车路上，镜头从车窗到家门，从脚步到拥抱，配温情配乐。</view>
<view class="section-content">▪ 跨屏团圆：家人在不同城市，通过视频通话一起赏月、举杯，把画面拼成多分屏的形式。</view>
<view class="section-content">▪ 微短剧：讲完一个中秋故事，例如外地打工人赶回家、邻里之间的中秋互助、宠物与主人团圆等。</view>
<view class="section-content">▪ 微短剧：讲完一个中秋故事，例如外地打工人赶回家、邻里之间的中秋互助、宠物与主人团圆等。</view>

<view class="section-content" style="margin-top: 30rpx;">【风物】旅行 / 风光 / 城市生活 — 敬眼中的万里山河</view>
<image style="height: 88rpx;" src="../../../assets/img/wdbg3.webp" alt="图片" mode="aspectFit" />
<view class="section-content">▪ 月下古城：航拍古城灯火与满月，慢慢推进到街头的人群与节日表演。</view>
<view class="section-content">▪ 城市夜景：拍城市高楼间的月亮，或节日广场上的花灯游人，使用延时摄影展现夜色变化。</view>
<view class="section-content">▪ 节日市集：镜头跟随一个小吃摊，从摆摊到顾客排队，特写食物、顾客表情、灯笼和月色。</view>

<view class="section-content" style="margin-top: 30rpx;">【人文】科普 / 历史 / 地域文化 — 敬时光里的家国故事</view>
<image style="height: 88rpx;" src="../../../assets/img/wdbg4.webp" alt="图片" mode="aspectFit" />
<view class="section-content">▪ 中秋典故动画化：用动画或剪纸还原"嫦娥奔月""吴刚伐桂"等传说。</view>
<view class="section-content">▪ 地方节庆纪录：记录当地独特的中秋习俗，比如"烧塔""走月亮""放河灯"，配解说文字和当地方言。</view>
<view class="section-content">▪ 历史遗迹探访：走进与中秋有关的古迹（祠堂、牌坊、古桥），结合历史故事讲述它与节日的联系。</view>

<view class="section-content" style="margin-top: 30rpx;">【创意】创意 / 音乐 / 动画 / AI — 敬美好生活的创意表达</view>
<image style="height: 88rpx;" src="../../../assets/img/wdbg5.webp" alt="图片" mode="aspectFit" />
<view class="section-content">▪ 音乐改编：用中秋相关歌词或旋律创作/改编一首歌，边唱边展示节日场景。</view>
<view class="section-content">▪ AI创作：用AI生成穿越古今的"中秋团圆"画面，把古人和现代人放在同一个月下。</view>
<view class="section-content">▪ 视觉特效：用转场或合成，让月亮"掉进"酒杯里，或从窗外"走进"客厅餐桌。</view>

<view class="section-content" style="margin-top: 30rpx;">4 拍摄通用技巧示例</view>
<view class="section-content">◦ 情绪细节：眼神、手势、举杯、微笑等细节镜头，往往更能打动人。</view>
<view class="section-content">◦ 光影氛围：傍晚到夜间的"蓝色时刻"光线适合拍人像，月光+灯笼能制造节日感。</view>
<view class="section-content">◦ 节奏感剪辑：搭配节日音乐，用快剪（节奏快）或慢剪（情绪慢）强化情绪。</view>
<view class="section-content">◦ 真实声音：不要全用BGM，保留生活声音（锅铲声、笑声、火车广播等）会更真实。</view>

<view class="section-content" style="margin-top: 30rpx;">5 如何让品牌自然融入影片</view>
<view class="section-content">不生硬喊口号：不要硬性要求创作者在片头或片尾说品牌名，可以用字幕或画面表达。</view>
<view class="section-content">不抢情感主线：品牌是团圆的陪伴者，而不是故事的主角。</view>
<view class="section-content">呼应主题：习酒品牌的出现最好与"光影中秋·团圆中国"的氛围统一，比如夜色、月光、餐桌、笑容。</view>

<view class="section-content" style="margin-top: 30rpx;">5.1情景自然出现（生活化融入）</view>
<view class="section-content">让习酒出现在"真实场景"中，不刻意说品牌，观众自然接受。</view>
<view class="section-content">◦ 团圆饭桌：拍家人围坐的餐桌，酒杯中斟着习酒，镜头轻轻扫过瓶身或酒杯上的标识。</view>
<view class="section-content">◦ 送礼瞬间：回家路上，手里提着习酒的礼盒，镜头只需给一个暖色调的手提袋特写。</view>
<view class="section-content">◦ 节日摆设：桌上月饼、柚子、茶与习酒一起出现，作为中秋餐桌的组成部分。</view>

<view class="section-content" style="margin-top: 30rpx;">5.2故事情节推动（情感化融入）</view>
<view class="section-content">把习酒作为情感传递的媒介，让它推动故事。</view>
<view class="section-content">◦ 回乡桥段：主角背着行李，手里拎着习酒礼盒，走进家门时递给父亲或长辈。</view>
<view class="section-content">◦ 跨城祝福：不能回家的人，通过快递寄出一瓶习酒，视频用"收礼瞬间"的笑容作结尾。</view>
<view class="section-content">◦ 代代相传：年轻人和长辈一起斟酒，边喝边聊起往年中秋的记忆。</view>

<view class="section-content" style="margin-top: 30rpx;">5.3创意演绎（符号化融入）</view>
<view class="section-content">用光影、特效或创意构图，把习酒作为视觉符号植入主题。</view>
<view class="section-content">◦ 月亮与酒杯：用构图让月亮倒映在习酒杯中，呼应"中秋夜喝习酒"的意境。</view>
<view class="section-content">◦ 时光交错：用转场从老照片切到现代画面，酒杯中始终有习酒，象征情感延续。</view>
<view class="section-content">◦ 文化符号化：在AI动画、手绘插画中，把习酒瓶作为节日插画的一部分（灯笼旁、团圆桌上）。</view>

<view class="section-content" style="margin-top: 30rpx;">5.4品牌呈现规范（片尾素材使用）</view>
<view class="section-content">为确保品牌元素在作品中得到统一呈现，参赛者需在作品结尾加入活动官方KV或指定片尾动画，以满足品牌露出要求，提升整体作品的规范性与辨识度。</view>
<view class="section-content">• 官方素材下载：活动KV、LOGO、结尾动画等统一素材，可在赛事官网或组委会提供的创作服务工具包获取。</view>
<view class="section-content">• 使用要求：</view>
<view class="section-content">（1）片尾需完整呈现官方指定元素，不得随意修改KV或LOGO。</view>
<view class="section-content">（2）结尾动画建议时长不少于3秒，保持视觉清晰，避免被其他元素遮挡。</view>
<view class="section-content">（3）允许在动画前增加作品署名或创作信息，但不得影响品牌识别。</view>

<view class="section" id="tools">
              <text class="section-title">创作辅助工具包</text>
              
              <view class="section-content" style="margin-top: 30rpx;">为帮助参赛者更好地理解品牌文化、保持作品风格统一，并提升内容的专业度，大赛特别提供创作辅助工具包，涵盖品牌信息、设计素材及活动规范，供创作者参考与使用：</view>

              <!-- 完整表格 -->
              <view class="table-container" style="margin-top: 30rpx;">
                <view class="table">
                  <!-- 文案参考部分 -->
                  <view class="table-section">
                    <view class="table-section-title">文案参考</view>
                    <view class="table-row">
                      <view class="table-cell title-cell">贵州习酒简介</view>
                      <view class="table-cell url-cell">https://www.gzxijiu.com/about/introduction?menuId=r_5uFQaERX42fDKDI702B</view>
                    </view>
                    <view class="table-row">
                      <view class="table-cell title-cell">习酒公益介绍</view>
                      <view class="table-cell url-cell">https://www.gzxijiu.com/benefit/report?menuId=fDBh9vRfzzdTn_haYTbLF</view>
                    </view>
                    <view class="table-row">
                      <view class="table-cell title-cell">君品文化内涵</view>
                      <view class="table-cell url-cell">https://www.gzxijiu.com/junpinCulture/cultural_essence?menuId=fie2E9zqKODhbKVCWL9H9</view>
                    </view>
                  </view>

                  <!-- 设计工具部分 -->
                  <view class="table-section">
                    <view class="table-section-title">设计工具</view>
                    <view class="table-row">
                      <view class="table-cell title-cell">相关平面下载</view>
                      <view class="table-cell url-cell">https://docs.qq.com/sheet/DVUlGaU1lZGR1SW5S?tab=000001</view>
                    </view>
                  </view>

                  <!-- 持续更新说明 -->
                  <view class="table-section">
                    <view class="table-section-title">持续更新说明</view>
                    <view class="table-row">
                      <view class="table-cell content-cell">随着赛事进程推进,工具包将不断完善,后续新增的设计素材、动画元素或模板,均会在上述线上文档实时更新,请参赛者及时关注并下载最新资源。</view>
                    </view>
                  </view>

                  <!-- 温馨提示 -->
                  <view class="table-section">
                    <view class="table-section-title">温馨提示</view>
                    <view class="table-row">
                      <view class="table-cell content-cell">参赛作品中可合理使用上述工具包素材,但请勿擅自修改Logo、KV等官方元素,以保证品牌识别度和品牌形象统一。</view>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <view>


              
            </view>
            </view>

            <!-- 作品规范 -->
            <view class="section" id="specs">
              <text class="section-title">作品规范</text>
              
              <view class="section-content" style="margin-top: 30rpx;">视频时长：</view>
              <view class="section-content">• 短视频：建议时长为 30秒至2分钟；</view>
              <view class="section-content">• 长视频：建议时长在5分钟以内；</view>
              <view class="section-content">• 内容需完整、有节奏感，避免拖沓或剪辑跳脱。</view>
              <view class="section-content">• 作品结尾建议加入本次活动KV或结尾动画，以强化话题关联度。资源见创作辅助工具包。</view>

              <view class="section-content" style="margin-top: 30rpx;">画面比例：</view>
              <view class="section-content">建议使用 9:16竖屏格式（适配抖音、快手等平台主流展示方式）；</view>
              <view class="section-content">如有特别创意，也可采用1:1、16:9或其他比例，需保持画面构图美观。</view>

              <view class="section-content" style="margin-top: 30rpx;">视频格式：</view>
              <view class="section-content">支持常见视频格式：mp4、mov、avi 等；</view>
              <view class="section-content">视频大小建议控制在500MB以内，便于平台上传与审核；</view>
              <view class="section-content">建议使用高清画质（720p及以上），避免视频模糊、音画不同步等问题。</view>
            </view>

            <!-- 参赛奖励 -->
            <view class="section" id="rewards">
              <text class="section-title">参赛奖励</text>
              
              <view class="section-content" style="margin-top: 30rpx;">每一份用心地记录，都是生活的高光。</view>
              <view class="section-content">本次大赛为创作者们准备了多重激励机制，让你的作品不仅被看见，更有机会获得流量加持与丰厚奖金</view>
              <view class="section-content">抖音/快手现金激励</view>
              <view class="section-content">参赛者可在平台任务专区领取拍摄任务，获取流量扶持与平台现金奖励。针对关联赛事话题且品牌关联度较高的优质作品还会获动平台流量扶持</view>
              <view class="section-content" style="margin-top: 30rpx;">奖项设置</view>
              <view class="section-content">为了鼓励创作者用镜头记录中秋的温情与团圆，本次大赛设置多重奖项，兼顾作品创意、主题表达、传播力与品质</view>
              <view class="section-content">荣誉奖为最高级别奖项，象征圆满、丰盈与纯净，表彰在创意与表现力上在本次大赛中优秀的作品；五大主题奖聚焦"传承之美、故事之光、风物之韵、人文之情、创意之星"，突出不同创作主题的特色与创新；传播奖、品质奖与星光奖则从作品的传播力、制作品质与互动表现进行表彰，确保创作价值被充分认可。</view>
              <view class="section-content">通过多维度奖项设置，每一份用心记录的作品都能获得关注与鼓励，让创作者不仅被看见，也能享受创作的荣誉与收获。</view>

              <!-- 奖项表格 -->
              
            </view>

            <!-- 参赛方式 -->
            <view class="section" id="method">
              <text class="section-title">参赛方式</text>
              
              <view class="section-content" style="margin-top: 30rpx;">参赛步骤指南：</view>

              <view class="section-content" style="margin-top: 30rpx;">第一步：完成作品拍摄</view>
              <view class="section-content">进入官网svideo.gzxijiu.com仔细阅读参赛手册。</view>
              <view class="section-content">根据手册建议进行作品的创作，作品结尾必须加入本次活动KV或结尾动画，资源见创作辅助工具包。</view>

              <view class="section-content" style="margin-top: 30rpx;">第二步：进入抖音或快手专题页</view>
              <view class="section-content">打开抖音或快手APP，扫描活动二维码或搜索话题 #习酒短视频大赛 ，进入官方专题页面。</view>
              <view class="section-content">点击"参与"按钮，开始录制短视频，或上传已拍摄好的作品。</view>
              <view class="section-content">发布时务必添加话题标签 #中秋夜·喝习酒 #光影中秋·团圆中国 #习酒短视频大赛 ，以便作品被统计和展示。</view>

              <view class="section-content" style="margin-top: 30rpx;">第三步：返回官网提交作品</view>
              <view class="section-content">进入活动官网，报名/登录个人账号。</view>
              <view class="section-content">微信入口：扫描二维码，进入小程序官网，按照提示进行报名；</view>
              <view class="section-content">网页入口：网页访问 svideo.gzxijiu.com，按照提示进行报名，</view>
              <view class="section-content">在"大赛报名"页面，填写报名信息。</view>
              <view class="section-content">将抖音或快手发布的视频链接复制粘贴至指定位置。</view>

              <view class="section-content" style="margin-top: 30rpx;">第四步：获奖领奖</view>
              <view class="section-content">大赛将在活动结束后通过官网发布获奖公示，并以电话或短信方式通知入选创作者。除入围奖外所有奖项将在"创作者之夜"颁奖典礼现场正式颁发，获奖者须按通知要求到场领取，不提供邮寄服务。</view>
            </view>

            <!-- 联系我们 -->
            <view class="section" id="contact">
              <text class="section-title">联系我们</text>
              
              <view class="section-content" style="margin-top: 30rpx;">如在报名、参赛、上传作品或其他过程中遇到任何问题，可通过以下方式与组委会联系：</view>
              <view class="section-content">联系邮箱：</view>
              <view class="section-content">联系电话：400-xxxx-xxx（工作日 09:00-18:00）</view>
              <view class="section-content">官方网站：svideo.gzxijiu.com</view>
              <view class="section-content">官方微信：关注"习酒短视频大赛"官方公众号，获取最新通知与技术支持。</view>
            </view>
          </view>
        </view>

        <!-- 左侧固定悬浮目录按钮 -->
        <view class="floating-menu">
          <image class="floating-menu-icon" src="../../../assets/icon/menu.webp" mode="aspectFit" />
          <text class="floating-menu-text">目录</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'

const sidebarOpen = ref(false)

const openSidebar = () => {
  sidebarOpen.value = true
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

const scrollToSection = (sectionId) => {
  // 使用微信小程序的页面滚动API
  try {
    uni.pageScrollTo({
      selector: `#${sectionId}`,
      duration: 300
    })
  } catch (error) {
    // 如果pageScrollTo不支持，使用简单的提示
    uni.showToast({
      title: `跳转到${getSectionName(sectionId)}`,
      icon: 'none',
      duration: 1500
    })
  }
  closeSidebar()
}

const getSectionName = (sectionId) => {
  const sectionNames = {
    'overview': '大赛综述',
    'theme': '大赛主题', 
    'time': '活动时间',
    'participants': '参赛对象',
    'topics': '参赛主题',
    'specs': '作品规范',
    'rewards': '参赛奖励',
    'method': '参赛方式',
    'contact': '联系我们'
  }
  return sectionNames[sectionId] || '未知章节'
}

const goToMaterials = () => {

}
</script>

<style lang="scss">
.bg{
  width: 100%;
  background: linear-gradient(180deg, #DCEDFF 0%, rgba(220, 237, 255, 0.10) 100%) , url(../../../assets/img/footer.webp) no-repeat center/cover;
  position: relative;
}

.top-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 40rpx 20rpx;
  font-weight: 400;
  .menu-btn {
    background: #ffffff;
    border-radius: 25rpx;
    padding: 15rpx 25rpx;
    display: flex;
    align-items: center;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.1);
    
    .menu-icon {
      width: 24rpx;
      height: 24rpx;
      margin-right: 10rpx;
    }
    
    .menu-text {
      font-size: 28rpx;
      color: #333333;
      font-weight: 500;
    }
  }
  
  .download-btn {
    display: flex;
    align-items: center;
    
    .download-icon {
      width: 24rpx;
      height: 24rpx;
      margin-right: 8rpx;
    }
    
    .download-text {
      font-size: 28rpx;
      color: #1E507E;
      font-weight: 500;
    }
  }
}

.main-content {
  padding: 60rpx 40rpx;
  
  .title-container {
    text-align: center;
    .main-title {
      display: block;
      font-size: 34rpx;
      color: #0E57A3;
      font-weight: bold;
      line-height: 1.3;
      margin-bottom: 20rpx;
    }
    
    .sub-title {
      display: block;
      font-size: 34rpx;
      color: #0E57A3;
      font-weight: 600;
    }
  }
}

.floating-menu {
  position: fixed;
  top: 36.5%;
  transform: translateY(-50%);
  background: #ffffff;
  border-radius: 0 40rpx 40rpx 0;
  padding: 10rpx 25rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.15);
  z-index: 1000;
  
  .floating-menu-icon {
    width: 25rpx;
    height: 25rpx;
    margin-right: 8rpx;
  }
  
  .floating-menu-text {
    font-size: 24rpx;
    color: #333333;
    font-weight: 500;
  }
}

.vote-list{
  background: #135690;
  padding: 20rpx;
  display: flex;
  flex-direction: row;
  gap: 15rpx;
  
  .vote-item {
    position: relative;
    flex: 1;
    height: 63rpx;
    border-radius: 15rpx;
    
    .vote-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    
    .vote-content {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;

      
      .vote-title {
        font-size: 24rpx;
        color: #ffffff;
        font-weight: bold;
        margin-bottom: 5rpx;
        text-shadow: 1rpx 1rpx 2rpx rgba(0, 0, 0, 0.5);
        text-align: center;
        line-height: 1.2;
      }
      
      .vote-info {
        font-size: 18rpx;
        color: #ffffff;
        opacity: 0.9;
        text-shadow: 1rpx 1rpx 2rpx rgba(0, 0, 0, 0.5);
        text-align: center;
      }
    }
  }
}

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
}

.manual-content {
  padding: 40rpx 30rpx;
  
  .section {
    margin-bottom: 60rpx;
    
    .section-title {
      display: block;
      font-size: 36rpx;
      color: #0E57A3;
      font-weight: bold;
      margin-bottom: 30rpx;
      text-align: center;
      padding-bottom: 20rpx;
      border-bottom: 2rpx solid #0E57A3;
    }
    
    .section-content {
      display: block;
      font-size: 28rpx;
      color: #333;
      line-height: 1.8;
      white-space: pre-line;
      text-align: justify;
      text-indent: 2em; // 首行缩进两格
      padding: 0 2em; // 左右各缩进两格
      
      // 针对包含br标签的内容，取消首行缩进
      &:has(br) {
        text-indent: 0;
      }
    }
  }
}

.table-container {
  margin: 20rpx 0;
  
  .table {
    border: 1rpx solid #ddd;
    border-radius: 8rpx;
    overflow: hidden;
    
    .table-section {
      border-bottom: 1rpx solid #ddd;
      
      &:last-child {
        border-bottom: none;
      }
      
      .table-section-title {
        background: #f8f9fa;
        padding: 20rpx;
        font-size: 28rpx;
        color: #000;
        text-align: center;
        font-weight: bold;
        border-bottom: 1rpx solid #ddd;
      }
      
      .table-row {
        display: flex;
        border-bottom: 1rpx solid #eee;
        
        &:last-child {
          border-bottom: none;
        }
        
        .table-cell {
          padding: 20rpx;
          font-size: 26rpx;
          line-height: 1.4;
          
          &.title-cell {
            background: #f8f9fa;
            color: #333;
            font-weight: 500;
            width: 200rpx;
            flex-shrink: 0;
          }
          
          &.url-cell {
            background: #fff;
            color: #666;
            flex: 1;
            word-break: break-all;
          }
          
          &.content-cell {
            background: #fff;
            color: #333;
            flex: 1;
            text-align: justify;
          }
        }
      }
    }
  }
}

.awards-table-container {
  margin: 40rpx 0;
  background: #ffffff;
  border-radius: 12rpx;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  .awards-table {
    width: 100%;
    font-size: 24rpx;
    border: 1rpx solid #e0e0e0;
    
    .awards-table-header {
      display: flex;
      background: #f5f5f5;
      border-bottom: 2rpx solid #d0d0d0;
      
      .header-cell {
        padding: 24rpx 12rpx;
        font-weight: 600;
        text-align: center;
        border-right: 1rpx solid #d0d0d0;
        font-size: 26rpx;
        color: #333;
        
        &:nth-child(1) { width: 15%; } // 奖项档次
        &:nth-child(2) { width: 25%; } // 奖项名称
        &:nth-child(3) { width: 10%; } // 数量
        &:nth-child(4) { width: 15%; } // 单人奖金
        &:nth-child(5) { width: 20%; } // 评分规则
        &:nth-child(6) { width: 15%; } // 说明
        &:last-child { border-right: none; }
      }
    }
    
    .awards-table-row {
      display: flex;
      border-bottom: 1rpx solid #e0e0e0;
      
      &:last-child {
        border-bottom: none;
      }
      
      .awards-table-cell {
        padding: 20rpx 12rpx;
        border-right: 1rpx solid #e0e0e0;
        vertical-align: top;
        line-height: 1.4;
        min-height: 60rpx;
        display: flex;
        align-items: center;
        
        &:nth-child(1) { width: 15%; } // 奖项档次
        &:nth-child(2) { width: 25%; } // 奖项名称
        &:nth-child(3) { width: 10%; } // 数量
        &:nth-child(4) { width: 15%; } // 单人奖金
        &:nth-child(5) { width: 20%; } // 评分规则
        &:nth-child(6) { width: 15%; } // 说明
        &:last-child { border-right: none; }
        
        &.category-cell {
          background: #f8f9fa;
          color: #0E57A3;
          font-weight: 600;
          text-align: center;
          justify-content: center;
          font-size: 26rpx;
          border-right: 2rpx solid #0E57A3;
        }
        
        // 奖项名称样式
        &:nth-child(2) {
          font-weight: 500;
          color: #333;
          font-size: 24rpx;
        }
        
        // 数量样式
        &:nth-child(3) {
          text-align: center;
          justify-content: center;
          font-weight: 600;
          color: #0E57A3;
          font-size: 24rpx;
        }
        
        // 奖金样式
        &:nth-child(4) {
          text-align: center;
          justify-content: center;
          font-weight: 600;
          color: #ff6b35;
          font-size: 24rpx;
        }
        
        // 评分规则样式
        &:nth-child(5) {
          color: #666;
          font-size: 22rpx;
          line-height: 1.3;
          text-align: center;
          justify-content: center;
        }
        
        // 说明样式
        &:nth-child(6) {
          color: #666;
          font-size: 22rpx;
          line-height: 1.3;
        }
      }
    }
  }
}

// 响应式设计
@media (max-width: 750rpx) {
  .awards-table-container {
    .awards-table {
      font-size: 22rpx;
      
      .awards-table-header .header-cell,
      .awards-table-row .awards-table-cell {
        padding: 20rpx 8rpx;
        
        &:nth-child(1) { width: 100rpx; }
        &:nth-child(2) { width: 160rpx; }
        &:nth-child(3) { width: 60rpx; }
        &:nth-child(4) { width: 100rpx; }
        &:nth-child(5) { width: 160rpx; }
        &:nth-child(6) { width: 160rpx; }
      }
    }
  }
}
</style>
