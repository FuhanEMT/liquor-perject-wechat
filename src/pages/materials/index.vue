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
          <view class="download-btn">
            <!-- <image class="download-icon" src="../../../assets/icon/download.webp" mode="aspectFit" /> -->
            <view class="download-icon"></view>
            <text class="download-text">资料下载</text>
          </view>
        </view>

        <!-- 主要内容区域 -->
        <view class="main-content">
          <view class="title-container">
            <text class="main-title">贵州习酒2025短视频创作大赛</text>
            <text class="sub-title">赛事资料</text>
          </view>

          <!-- 资料内容 -->
          <view class="manual-content">
            <!-- 大赛综述 -->
            <view class="section" id="overview">
              <text class="section-title">一、大赛综述</text>
              <text class="section-content">"中秋夜·喝习酒"是习酒多年打造的中秋文化IP，寄托了对明月、亲情与家国的敬意，更承载中华优秀传统文化的传承与创新。</text>
              <text
                class="section-content">在新时代文化建设的大背景下，中秋节不仅是一家人团聚的节日，更是弘扬中华文化、促进文化自信与文化认同的重要契机。国家在文化发展中不断强调节日文化与生活美学的融合，推动传统文化与现代社会生活融合发展。习酒持续打造的"中秋夜·喝习酒"IP，正是顺应这一趋势，将文化仪式感与现代生活场景结合，让传统节日焕发新的时代意义。</text>
              <text
                class="section-content">作为"君品文化"的倡导者与践行者，贵州习酒以"弘扬君品文化，酿造生活之美"为使命，传递美好生活方式。"中秋夜·喝习酒"不仅是一种节日仪式，更是君品精神在生活场景中的具象呈现，让每一杯酒都承载着礼仪之美、诚信之道与和谐共生的文化内涵。</text>
              <text
                class="section-content">2025年，贵州习酒以"光影中秋·团圆中国"为年度主题，邀请央级媒体—人民网作为全媒体支持单位，共同发起短视频创作大赛，人民网将依托其权威传播力与全平台资源，在全平台矩阵渠道进行联动报道，助力赛事实现更大范围的全民参与和文化共振。大赛诚邀全国人民用镜头记录中秋里的美好瞬间。这些画面可以是一顿热气腾腾的团圆饭、一段奔赴回家的旅程、一句家常话里的温暖，也可以是一项手艺、一处风景、一份守望。在这一杯酒里，有人间烟火，有山河万里；在这一个中秋，有团圆中国，也有生活光影。</text>
              <text
                class="section-content">本次大赛旨在通过大众创作，记录和呈现中秋节日文化的多样面貌，弘扬家国情怀，传播中华传统节日价值，同时激发全民参与和创造力，让中秋文化在现代生活中生动延续。</text>
              <text class="section-content">在这一杯酒里，有人间烟火，有山河万里；</text>
              <text class="section-content">在这一个中秋，有团圆中国，有生活光影。</text>
            </view>

            <!-- 大赛主题 -->
            <view class="section" id="theme">
              <text class="section-title">二、大赛主题</text>
              <text class="section-content">"中秋夜·喝习酒"——"光影中秋·团圆中国"贵州习酒2025短视频创作大赛</text>
              <text class="section-content">主办方：贵州习酒</text>
              <text class="section-content">媒体支持：人民网</text>
              <text class="section-content">比赛平台：抖音、快手</text>
              <text class="section-content">媒体支持平台：视频号、小红书、微博</text>
            </view>

            <!-- 活动时间 -->
            <view class="section" id="time">
              <text class="section-title">三、活动时间</text>
              <text class="section-content">作品征集时间：2025年9月8日 12:00 — 2025年10月8日 00:00</text>
              <text class="section-content">评奖时间：2025年10月9日 — 2025年10月15日</text>
              <text class="section-content">奖项公布时间：2025年10月16日— 2025年10月20日</text>
              <text class="section-content">颁奖时间（创作者之夜）：2025年10月23日</text>
              <text class="section-content">以上时间安排为初步拟定，若有调整时会以公告形式在赛事专题网站告知。</text>
            </view>

            <!-- 参赛对象 -->
            <view class="section" id="participants">
              <text class="section-title">四、参赛对象</text>
              <text class="section-content bold-number">1 特邀创作者（光影助威官）</text>
              <text class="section-content">由官方邀请的抖音、快手优质短视频达人，作为本次短视频创作大赛的"助威官"，参与主题创作及宣传播排名，助力赛事的传播开展。</text>
              <text class="section-content bold-number">2 开放报名参赛者（光影创作人）</text>
              <text class="section-content">面向所有有短视频拍摄创作意愿的公众用户。通过官网或平台入口报名参赛并传播，提交作品参与评奖。</text>
            </view>

            <!-- 参赛主题 -->
            <view class="section" id="topics">
              <text class="section-title">五、参赛主题</text>
              <text class="section-content bold-number">3 五大拍摄主题及脚本示意</text>
              <text class="section-content bold-italic">3.1【传承】非遗 / 习俗 / 美食 — 敬烟火里的老味道</text>
              <!-- <image class="theme-image" src="../../../assets/img/wdbg1.webp" mode="aspectFit" /> -->
              <view class="theme-image-wdbg1"></view>
              <text class="section-content">▪ 家庭月饼制作：从和面、包馅、印花到出炉，手部特写+慢动作，搭配锅中油炸或烤箱开门的"出炉瞬间"。</text>
              <text class="section-content">▪ 非遗匠人故事：拍老街里做灯笼、雕花饼模、捏糖人的师傅，配人物采访或配音旁白，记录手艺背后的情感。</text>
              <text class="section-content">▪ 厨房烟火：节日前夜，长辈们在厨房忙碌的场景，光线昏黄、蒸汽氤氲，营造温暖感。</text>
              <text class="section-content bold-italic">3.2【叙事】剧情 / 短剧 / 家庭故事 — 敬家国的小团圆</text>
              <!-- <image class="theme-image" src="../../../assets/img/wdbg2.webp" mode="aspectFit" /> -->
              <view class="theme-image-wdbg2"></view>
              <text class="section-content">▪ 归途纪实：用手机拍自己回家的火车/飞机/汽车路上，镜头从车窗到家门，从脚步到拥抱，配温情配乐。</text>
              <text class="section-content">▪ 跨屏团圆：家人在不同城市，通过视频通话一起赏月、举杯，把画面拼成多分屏的形式。</text>
              <text class="section-content">▪ 微短剧：讲完一个中秋故事，例如外地打工人赶回家、邻里之间的中秋互助、宠物与主人团圆等。</text>
              <text class="section-content bold-italic">3.3【风物】旅行 / 风光 / 城市生活 — 敬眼中的万里山河</text>
              <!-- <image class="theme-image" src="../../../assets/img/wdbg3.webp" mode="aspectFit" /> -->
              <view class="theme-image-wdbg3"></view>
              <text class="section-content">▪ 月下古城：航拍古城灯火与满月，慢慢推进到街头的人群与节日表演。</text>
              <text class="section-content">▪ 城市夜景：拍城市高楼间的月亮，或节日广场上的花灯游人，使用延时摄影展现夜色变化。</text>
              <text class="section-content">▪ 节日市集：镜头跟随一个小吃摊，从摆摊到顾客排队，特写食物、顾客表情、灯笼和月色。</text>
              <text class="section-content bold-italic">3.4【人文】科普 / 历史 / 地域文化 — 敬时光里的家国故事</text>
              <!-- <image class="theme-image" src="../../../assets/img/wdbg4.webp" mode="aspectFit" /> -->
              <view class="theme-image-wdbg4"></view>
              <text class="section-content">▪ 中秋典故动画化：用动画或剪纸还原"嫦娥奔月""吴刚伐桂"等传说。</text>
              <text class="section-content">▪ 地方节庆纪录：记录当地独特的中秋习俗，比如"烧塔""走月亮""放河灯"，配解说文字和当地方言。</text>
              <text class="section-content">▪ 历史遗迹探访：走进与中秋有关的古迹（祠堂、牌坊、古桥），结合历史故事讲述它与节日的联系。</text>
              <text class="section-content bold-italic">3.5【创意】创意 / 音乐 / 动画 / AI — 敬美好生活的创意表达</text>
              <!-- <image class="theme-image" src="../../../assets/img/wdbg5.webp" mode="aspectFit" /> -->
              <view class="theme-image-wdbg5"></view>
              <text class="section-content">▪ 音乐改编：用中秋相关歌词或旋律创作/改编一首歌，边唱边展示节日场景。</text>
              <text class="section-content">▪ AI创作：用AI生成穿越古今的"中秋团圆"画面，把古人和现代人放在同一个月下。</text>
              <text class="section-content">▪ 视觉特效：用转场或合成，让月亮"掉进"酒杯里，或从窗外"走进"客厅餐桌。</text>
              <text class="section-content bold-number">4 拍摄通用技巧示例</text>
              <text class="section-content">◦ 情绪细节：眼神、手势、举杯、微笑等细节镜头，往往更能打动人。</text>
              <text class="section-content">◦ 光影氛围：傍晚到夜间的"蓝色时刻"光线适合拍人像，月光+灯笼能制造节日感。</text>
              <text class="section-content">◦ 节奏感剪辑：搭配节日音乐，用快剪（节奏快）或慢剪（情绪慢）强化情绪。</text>
              <text class="section-content">◦ 真实声音：不要全用BGM，保留生活声音（锅铲声、笑声、火车广播等）会更真实。</text>
              <text class="section-content bold-number">5 如何让品牌自然融入影片</text>
              <text class="section-content">不生硬喊口号：不要硬性要求创作者在片头或片尾说品牌名，可以用字幕或画面表达。</text>
              <text class="section-content">不抢情感主线：品牌是团圆的陪伴者，而不是故事的主角。</text>
              <text class="section-content">呼应主题：习酒品牌的出现最好与"光影中秋·团圆中国"的氛围统一，比如夜色、月光、餐桌、笑容。</text>
              <text class="section-content bold-italic">5.1情景自然出现（生活化融入）</text>
              <text class="section-content">让习酒出现在"真实场景"中，不刻意说品牌，观众自然接受。</text>
              <text class="section-content">◦ 团圆饭桌：拍家人围坐的餐桌，酒杯中斟着习酒，镜头轻轻扫过瓶身或酒杯上的标识。</text>
              <text class="section-content">◦ 送礼瞬间：回家路上，手里提着习酒的礼盒，镜头只需给一个暖色调的手提袋特写。</text>
              <text class="section-content">◦ 节日摆设：桌上月饼、柚子、茶与习酒一起出现，作为中秋餐桌的组成部分。</text>
              <text class="section-content bold-italic">5.2故事情节推动（情感化融入）</text>
              <text class="section-content">把习酒作为情感传递的媒介，让它推动故事。</text>
              <text class="section-content">◦ 回乡桥段：主角背着行李，手里拎着习酒礼盒，走进家门时递给父亲或长辈。</text>
              <text class="section-content">◦ 跨城祝福：不能回家的人，通过快递寄出一瓶习酒，视频用"收礼瞬间"的笑容作结尾。</text>
              <text class="section-content">◦ 代代相传：年轻人和长辈一起斟酒，边喝边聊起往年中秋的记忆。</text>
              <text class="section-content bold-italic">5.3创意演绎（符号化融入）</text>
              <text class="section-content">用光影、特效或创意构图，把习酒作为视觉符号植入主题。</text>
              <text class="section-content">◦ 月亮与酒杯：用构图让月亮倒映在习酒杯中，呼应"中秋夜喝习酒"的意境。</text>
              <text class="section-content">◦ 时光交错：用转场从老照片切到现代画面，酒杯中始终有习酒，象征情感延续。</text>
              <text class="section-content">◦ 文化符号化：在AI动画、手绘插画中，把习酒瓶作为节日插画的一部分（灯笼旁、团圆桌上）。</text>
              <text class="section-content bold-italic">5.4品牌呈现规范（片尾素材使用）</text>
              <text class="section-content">为确保品牌元素在作品中得到统一呈现，参赛者需在作品结尾加入活动官方KV或指定片尾动画，以满足品牌露出要求，提升整体作品的规范性与辨识度。</text>
              <text class="section-content">• 官方素材下载：活动KV、LOGO、结尾动画等统一素材，可在赛事官网或组委会提供的创作服务工具包获取。</text>
              <text class="section-content">• 使用要求：</text>
              <text class="section-content">（1）片尾需完整呈现官方指定元素，不得随意修改KV或LOGO。</text>
              <text class="section-content">（2）结尾动画建议时长不少于3秒，保持视觉清晰，避免被其他元素遮挡。</text>
              <text class="section-content">（3）允许在动画前增加作品署名或创作信息，但不得影响品牌识别。</text>
            </view>

            <!-- 创作辅助工具包 -->
            <view class="section" id="tools">
              <text class="section-title">六、创作辅助工具包</text>
              <text
                class="section-content">为帮助参赛者更好地理解品牌文化、保持作品风格统一，并提升内容的专业度，大赛特别提供创作辅助工具包，涵盖品牌信息、设计素材及活动规范，供创作者参考与使用：</text>
              <view class="table-container">
                <view class="table">
                  <view class="table-section">
                    <view class="table-section-title">文案参考</view>
                    <view class="table-row">
                      <view class="table-cell title-cell">贵州习酒简介</view>
                      <view class="table-cell url-cell">
                        https://www.gzxijiu.com/about/introduction?menuId=r_5uFQaERX42fDKDI7O2B</view>
                    </view>
                    <view class="table-row">
                      <view class="table-cell title-cell">习酒公益介绍</view>
                      <view class="table-cell url-cell">
                        https://www.gzxijiu.com/benefit/report?menuId=fDBh9vRfzzdTn_haYTbLF</view>
                    </view>
                    <view class="table-row">
                      <view class="table-cell title-cell">君品文化内涵</view>
                      <view class="table-cell url-cell">
                        https://www.gzxijiu.com/junpinCulture/cultural_essence?menuId=fie2E9zqKODhbKVCWL9H9</view>
                    </view>
                  </view>

                  <view class="table-section">
                    <view class="table-section-title">设计工具</view>
                    <view class="table-row">
                      <view class="table-cell title-cell">相关平面下载</view>
                      <view class="table-cell url-cell">https://docs.qq.com/sheet/DVUlGaU1lZGR1SW5S?tab=000001</view>
                    </view>
                  </view>

                  <view class="table-section">
                    <view class="table-section-title">持续更新说明</view>
                    <view class="table-row">
                      <view class="table-cell content-cell">
                        随着赛事进程推进，工具包将不断完善，后续新增的设计素材、动画元素或模板，均会在上述线上文档实时更新，请参赛者及时关注并下载最新资源。</view>
                    </view>
                  </view>

                  <view class="table-section">
                    <view class="table-section-title">温馨提示</view>
                    <view class="table-row">
                      <view class="table-cell content-cell">参赛作品中可合理使用上述工具包素材，但请勿擅自修改Logo、KV等官方元素，以保证品牌识别度和品牌形象统一。
                      </view>
                    </view>
                  </view>
                </view>
              </view>
            </view>

            <!-- 作品规范 -->
            <view class="section" id="specs">
              <text class="section-title">七、作品规范</text>
              <text class="section-content">为确保视频内容质量与传播效果，请参赛者遵循以下作品提交规范：</text>

              <text class="section-content bold-number">6 视频时长：</text>
              <text class="section-content">• 短视频：建议时长为 30秒至2分钟；</text>
              <text class="section-content">• 长视频：建议时长在5分钟以内；</text>
              <text class="section-content">• 内容需完整、有节奏感，避免拖沓或剪辑跳脱。</text>
              <text class="section-content">• 作品结尾建议加入本次活动KV或结尾动画，以强化话题关联度。资源见创作辅助工具包。</text>

              <text class="section-content bold-number">7 画面比例：</text>
              <text class="section-content">建议使用 9:16竖屏格式（适配抖音、快手等平台主流展示方式）；</text>
              <text class="section-content">如有特别创意，也可采用1:1、16:9或其他比例，需保持画面构图美观。</text>

              <text class="section-content bold-number">8 视频格式：</text>
              <text class="section-content">支持常见视频格式：mp4、mov、avi 等；</text>
              <text class="section-content">视频大小建议控制在500MB以内，便于平台上传与审核；</text>
              <text class="section-content">建议使用高清画质（720p及以上），避免视频模糊、音画不同步等问题。</text>

              <text class="section-content bold-number">9 注意事项</text>
              <text class="section-content">• 每位参赛者限提交1件作品，严禁刷量或重复投稿；</text>
              <text class="section-content">• 所有参赛作品须为原创，未经他人授权转载、拼接、抄袭等行为将取消参赛资格。</text>
            </view>

            <!-- 参赛奖励 -->
            <view class="section" id="rewards">
              <text class="section-title">八、参赛奖励</text>
              <text class="section-content">每一份用心地记录，都是生活的高光。</text>
              <text class="section-content">本次大赛为创作者们准备了多重激励机制，让你的作品不仅被看见，更有机会获得流量加持与丰厚奖金</text>

              <text class="section-content bold-number">10 抖音/快手现金激励</text>
              <text class="section-content">参赛者可在平台任务专区领取拍摄任务，获取流量扶持与平台现金奖励。针对关联赛事话题且品牌关联度较高的优质作品还会获动平台流量扶持。</text>

              <text class="section-content bold-number">11 奖项设置</text>
              <text class="section-content">为了鼓励创作者用镜头记录中秋的温情与团圆，本次大赛设置多重奖项，兼顾作品创意、主题表达、传播力与品质。</text>
              <text
                class="section-content">荣誉奖为最高级别奖项，象征圆满、丰盈与纯净，表彰在创意与表现力上在本次大赛中优秀的作品；五大主题奖聚焦"传承之美、故事之光、风物之韵、人文之情、创意之星"，突出不同创作主题的特色与创新；传播奖、品质奖与星光奖则从作品的传播力、制作品质与互动表现进行表彰，确保创作价值被充分认可。</text>
              <text class="section-content">通过多维度奖项设置，每一份用心记录的作品都能获得关注与鼓励，让创作者不仅被看见，也能享受创作的荣誉与收获。</text>

              <!-- 荣誉奖 -->
              <view class="award-category">
                <text class="award-category-title">荣誉奖</text>
                <view class="award-item">
                  <view class="award-name">光影金奖</view>
                  <view class="award-details">
                    <text class="award-prize">¥50,000</text>
                    <text class="award-count">1名</text>
                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">光影银奖</view>
                  <view class="award-details">
                    <text class="award-prize">¥40,000</text>
                    <text class="award-count">2名</text>
                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">光影铜奖</view>
                  <view class="award-details">
                    <text class="award-prize">¥30,000</text>
                    <text class="award-count">3名</text>
                  </view>
                </view>
                <text class="award-desc">说明：象征本次活动的最高荣誉</text>
              </view>

              <!-- 主题奖 -->
              <view class="award-category">
                <text class="award-category-title">主题奖</text>
                <view class="award-item">
                  <view class="award-name">光影之星奖-传承之美</view>
                  <view class="award-details">
                    <text class="award-prize">¥20,000</text>
                    <text class="award-count">2名</text>
                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">光影之星奖-故事之光</view>
                  <view class="award-details">
                    <text class="award-prize">¥20,000</text>
                    <text class="award-count">2名</text>
                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">光影之星奖-风物之韵</view>
                  <view class="award-details">
                    <text class="award-prize">¥20,000</text>
                    <text class="award-count">2名</text>
                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">光影之星奖-人文之情</view>
                  <view class="award-details">
                    <text class="award-prize">¥20,000</text>
                    <text class="award-count">2名</text>
                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">光影之星奖-创意之路</view>
                  <view class="award-details">
                    <text class="award-prize">¥20,000</text>
                    <text class="award-count">2名</text>
                  </view>
                </view>
                <text class="award-desc">说明：突出不同创作主题的特色与创新</text>
              </view>

              <!-- 优秀奖 -->
              <view class="award-category">
                <text class="award-category-title">优秀奖</text>
                <view class="award-item">
                  <view class="award-name">优秀作品奖</view>
                  <view class="award-details">
                    <text class="award-prize">¥10,000</text>
                    <text class="award-count">8名</text>
                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">最佳传播奖</view>
                  <view class="award-details">
                    <text class="award-prize">¥10,000</text>
                    <text class="award-count">6名</text>
                  </view>
                </view>
                <text class="award-desc">说明：质量优质或传播量高的作品</text>
              </view>

              <!-- 人气奖 -->
              <view class="award-category">
                <text class="award-category-title">人气奖</text>
                <view class="award-item">
                  <view class="award-name">最具人气奖</view>
                  <view class="award-details">
                    <text class="award-prize">¥8,000</text>
                    <text class="award-count">10名</text>
                  </view>
                </view>
                <text class="award-desc">说明：通过朋友圈分享，点赞数较高的作品（可与其他奖项共同获得）</text>
              </view>

              <!-- 入围奖 -->
              <view class="award-category">
                <text class="award-category-title">入围奖</text>
                <view class="award-item">
                  <view class="award-name">入围作品奖</view>
                  <view class="award-details">
                    <text class="award-prize">文创纪念品</text>
                    <text class="award-count">所有入围选手</text>
                  </view>
                </view>
                <text class="award-desc">说明：所有入围的选手均可获得习酒文创纪念品</text>
              </view>

              <text class="section-content">• 光影创作人每件作品只能获得一个奖项，按照荣誉奖、主题奖、优秀奖及最佳传播奖从上至下的优先级进行获奖，确保评选的公平性与参与度。</text>
              <text class="section-content">•
                获奖者须参加创作者之夜领取奖项，包括奖杯、奖品及奖金，均不提供邮寄服务。如获奖者未能出席创作者之夜，则视为自动放弃奖项，组委会将按规则顺延或补位。</text>
              <text class="section-content">• 入围纪念奖根据申报作品数量确定入围数量，以实际公告发布为准。</text>

              <text class="section-content bold-number">12 奖项说明</text>

              <text class="section-content bold-italic">12.1荣誉奖</text>
              <text
                class="section-content">荣誉奖是本次大赛的最高级别奖项，面向全体参赛作品评选，代表创作水平与传播影响力的双重肯定。获奖作品不仅在影像质量、创意表达上达到本次赛事的最高水准，同时在各大平台的数据表现、观众反馈上也名列前茅。</text>
              <text class="section-content">年度金奖（1 名）：奖金 ¥50,000，象征中秋圆满与最高荣誉，授予在创意、质量与传播力方面均表现卓越的作品。</text>
              <text class="section-content">年度银奖（2 名）：奖金 ¥40,000，象征丰盈与次高荣誉，授予整体表现优异、综合实力突出的作品。</text>
              <text class="section-content">年度铜奖（3 名）：奖金 ¥30,000，象征纯净与基础荣誉，授予具备良好创作水平与传播表现的作品。</text>
              <text class="section-content">评分规则（荣誉奖通用）：40% 专家评分 + 60% 客观数据得分 + 10 分加权</text>

              <text class="section-content bold-italic">12.2主题-光影之星奖</text>
              <text
                class="section-content">主题奖旨在鼓励创作者围绕不同创作主题进行深度挖掘与艺术表达，彰显多元视角与独特创意。每个主题单独评选，确保在细分领域中涌现更多具有代表性与感染力的优秀作品。</text>
              <text class="section-content">传承之美（2 名）：奖金 ¥20,000，突出文化传承的创意与表现力，展现中华优秀传统文化之美。</text>
              <text class="section-content">故事之光（2 名）：奖金 ¥20,000，突出叙事能力与情感表达，用镜头讲述打动人心的故事。</text>
              <text class="section-content">风物之韵（2 名）：奖金 ¥20,000，突出地域风物与视觉呈现，传递独具特色的人文与自然风光。</text>
              <text class="section-content">人文之情（2 名）：奖金 ¥20,000，突出人文关怀与情感共鸣，记录人与人之间的温暖与守望。</text>
              <text class="section-content">创意之星（2 名）：奖金 ¥20,000，突出创意与表现力创新，探索中秋主题下的新颖表达方式。</text>
              <text class="section-content">评分规则（主题奖通用）：40% 专家评分 + 60% 客观数据得分 + 10 分加权</text>

              <text class="section-content bold-italic">12.3优秀作品奖</text>
              <text
                class="section-content">优秀奖旨在表彰未获得荣誉奖、主题奖，但在整体质量上依然表现优异、具有较高艺术水准与观赏价值的作品。它既是对创作者专业水准的认可，也是鼓励更多优质内容涌现的重要机制。</text>
              <text class="section-content">• 优秀作品奖（8 名）：奖金 ¥10,000，面向题材多样、制作精良、情感真挚且在传播中有良好反响的作品。</text>
              <text class="section-content">评分规则：80% 专家评分 + 20% 客观数据得分 + 10 分加权</text>

              <text class="section-content bold-italic">12.4最佳传播奖</text>
              <text
                class="section-content">最佳传播奖旨在表彰在各大平台（抖音、快手等）获得高曝光量和互动量的作品，突出作品的传播力与社会影响力。该奖项面向未获得荣誉奖、主题奖的作品，鼓励创作者兼顾内容质量与传播表现。</text>
              <text class="section-content">• 最佳传播奖（6 名）：奖金：¥10,000
                /人；该奖项旨在表彰传播表现突出的作品，同时激励创作者在内容创作之外，积极拓展多平台发布和互动。</text>
              <text class="section-content">评分规则：20% 专家评分 + 80% 客观数据得分 + 10 分加权</text>

              <text class="section-content bold-italic">12.5最具人气奖</text>
              <text
                class="section-content">人气奖旨在表彰通过朋友圈分享、互动点赞数高，获得广泛关注与认可的作品，突出作品的传播力与社会反响。此奖项可与其他奖项兼得，鼓励创作者在内容质量之外，也注重与观众的互动与共鸣。</text>
              <text class="section-content">• 最具人气奖（10 名）：奖金 ¥8,000，面向通过微信生态进行作品分享，获得高点赞量的作品。</text>
              <text class="section-content">评分规则：100% 投票数：完全依据观众投票数据统计，体现作品在观众中的受欢迎程度。</text>

              <text class="section-content bold-italic">12.6入围作品奖</text>
              <text
                class="section-content">为了感谢每一位积极参与的大赛创作者，我们特别准备了习酒文创伴手礼，赠予成功入围的参赛者。每一份礼品不仅是对创作者努力与才华的认可，更是我们对文化传承与创意表达的致敬。具体奖品及数量将以赛事最终公告为准。</text>
            </view>

            <!-- 参赛方式 -->
            <view class="section" id="participation">
              <text class="section-title">九、参赛方式</text>

              <text class="section-content bold-number">13 参赛步骤指南：</text>

              <text class="section-content bold-number">第一步：完成作品拍摄</text>
              <text class="section-content">1.进入官网<text class="red-text">svideo.gzxijiu.com</text>仔细阅读参赛手册。</text>
              <text class="section-content">2.根据手册建议进行作品的创作，作品结尾必须加入本次活动KV或结尾动画，资源见创作辅助工具包。</text>

              <text class="section-content bold-number">第二步：进入抖音或快手专题页</text>
              <text class="section-content">3.打开抖音或快手APP，扫描活动二维码或搜索话题 #习酒短视频大赛 ，进入官方专题页面。</text>
              <text class="section-content">4.点击"参与"按钮，开始录制短视频，或上传已拍摄好的作品。</text>
              <text class="section-content">5.发布时务必添加话题标签 #中秋夜·喝习酒 #光影中秋·团圆中国 #习酒短视频大赛 ，以便作品被统计和展示。</text>

              <text class="section-content bold-number">第三步：返回官网提交作品</text>
              <text class="section-content">6.进入活动官网，报名/登录个人账号。</text>
              <text class="section-content">◦ 微信入口：扫描二维码，进入小程序官网，按照提示进行报名；</text>
              <text class="section-content">◦ 网页入口：网页访问 <text
                  class="red-text">svideo.gzxijiu.com</text>，按照提示进行报名，</text>
              <text class="section-content">7.在"<text class="red-text">大赛报名</text>"页面，填写报名信息。</text>
              <text class="section-content">8.将抖音或快手发布的视频链接复制粘贴至指定位置。</text>
              <text class="section-content">9.提交其它平台链接/截图（可选）：</text>
              <text class="section-content">参赛者在主赛道平台以外发布的作品，互动量（点赞 + 评论 + 转发）可获得加权分，规则如下</text>
              <text class="section-content">◦ 每满 1000 互动量，加 0.2 分，总分10分。可多平台互动量累计计算。</text>
              <text class="section-content">10.上传视频原文件</text>
              <text class="section-content">11.确认信息无误后提交报名，完成作品上传。</text>

              <text class="section-content bold-number">第四步：获奖领奖</text>
              <text
                class="section-content">12.大赛将在活动结束后通过官网发布获奖公示，并以电话或短信方式通知入选创作者。除入围奖外所有奖项将在"创作者之夜"颁奖典礼现场正式颁发，获奖者须按通知要求到场领取，不提供邮寄服务。未能到场视为自动放弃获奖资格。请参赛者保持联系方式畅通，及时关注官网公告，避免错过领奖机会。</text>
              <text
                class="section-content">13.参与"创作者之夜"的嘉宾还将受邀前往习酒酒厂，体验探厂环节。创作者应拍摄并发布探厂Vlog或体验类短视频，作为文化互动的一部分，让更多人感受习酒的匠心与魅力。</text>

              <text class="section-content bold-number">14 重要提示</text>
              <text class="section-content">• 请确保视频内容符合活动主题，积极健康，杜绝涉政涉黄等违规内容。</text>
              <text class="section-content">• <text class="red-text">建议用优质设备拍摄与剪辑</text>，保障视频质量。</text>
              <text class="section-content">• 通过官网完成作品提交（含抖音/快手视频链接上传及加权分数截图提交）是参赛报名的必要环节，缺少任何步骤均视为报名不完整。</text>
              <text class="section-content">• 加权分数截图须真实有效，禁止伪造或篡改互动数据，一经发现将取消参赛及获奖资格。</text>
              <text class="section-content">• 未完成官网报名全流程的参赛者，虽然可以获得抖音/快手平台的流量扶持和现金奖励，但不具备参与本次大赛评奖的资格。</text>
            </view>

            <!-- 评奖规则 -->
            <view class="section" id="evaluation">
              <text class="section-title">十、评奖规则</text>

              <text class="section-content">本次大赛坚持公开、公平、公正原则，采用专家评分 + 客观数据 + 加权分的综合模式进行评定，确保作品质量与传播力兼顾。</text>
              <text class="section-content">评奖作品为自主报名作品，光影助威官不参与奖项评选。</text>
              <text class="section-content">先评选荣誉奖，其次评选主题奖，之后进行优秀奖和最佳传播奖评选。最后，在整体作品范围内评选最具人气奖。</text>
              <text
                class="section-content">光影创作人每件作品只能获得一个奖项，按照荣誉奖、主题奖、优秀奖及最佳传播奖自前至后的优先级进行获奖，确保评选的公平性与参与度。奖项评选按照总得分从高到低依次进行，保证作品在创意、质量与传播力上的综合表现被公正评价。</text>
              <text class="section-content">获奖作品的创作者仍可额外获得最具人气奖，鼓励创作者兼顾作品质量与传播互动。</text>

              <text class="section-content bold-number">15 综合得分公式</text>
              <text class="section-content">总得分 = 专家评分 + 客观数据 + 传播加权分</text>
              <text class="section-content">奖项对应分数：</text>

              <view class="table-container">
                <view class="table">
                  <view class="table-section">
                    <view class="table-section-title">满分110分</view>
                    <view class="table-row">
                      <view class="table-cell title-cell">荣誉奖 / 主题奖：</view>
                      <view class="table-cell content-cell">40分 专家评分 + 60分 客观数据 + 10 分加权</view>
                    </view>
                    <view class="table-row">
                      <view class="table-cell title-cell">优秀作品奖：</view>
                      <view class="table-cell content-cell">80分 专家评分 + 20分 客观数据 + 10 分加权</view>
                    </view>
                    <view class="table-row">
                      <view class="table-cell title-cell">最佳传播奖：</view>
                      <view class="table-cell content-cell">20分 专家评分 + 80分 客观数据 + 10 分加权</view>
                    </view>
                    <view class="table-row">
                      <view class="table-cell title-cell">最具人气奖：</view>
                      <view class="table-cell content-cell">100% 观众投票，排名前十的获得奖项</view>
                    </view>
                  </view>
                </view>
              </view>

              <text class="section-content">说明：加权分用于奖励创作者在多平台传播、参与互动或作品亮点等方面的额外表现。</text>

              <text class="section-content bold-number">16 专家评分（主观维度）</text>
              <text
                class="section-content">为确保赛事评选的专业性与公正性，大赛将特别组建由影视创作专家、媒体代表、行业学者及品牌方代表组成的专家评审团（是否提前明确几人？），对参赛作品进行全面、细致的主观评分。评审团将从主题契合度、内容创意度、品牌关联度三个维度进行考量，结合各奖项的不同评审权重，确保每一件作品都能在统一标准下得到客观、公正的评价。</text>
              <text
                class="section-content">专家评分不仅关注作品的技术与创意表现，更强调其与中秋文化、赛事主题及品牌精神的契合度，从而保证最终获奖作品在艺术性、传播性与价值导向上的高度统一。</text>
              <text class="section-content">• 优秀奖的专家评分更侧重作品的整体创作质量，包括主题完整性、情感表达与技术表现力。</text>
              <text class="section-content">• 评分维度：</text>

              <view class="award-category">
                <view class="award-item">
                  <view class="award-name">维度</view>
                  <view class="award-details">
                    <text class="award-prize">主题契合度</text>

                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">权重</view>
                  <view class="award-details">
                    <text class="award-prize">40%</text>
                  </view>
                </view>
                <view class="award-item">
                  <view class="award-details">
                    <text class="award-name">总分:满分 40 分（荣誉奖 / 主题奖）、满分 20 分（优秀作品奖）、满分80分（最佳传播奖）</text>
                  </view>
                </view>

                <text class="award-desc">说明：是否准确诠释命题方向、主题精神及品牌内核</text>
              </view>

              <view class="award-category">
                <view class="award-item">
                  <view class="award-name">维度</view>
                  <view class="award-details">
                    <text class="award-prize">内容创意度</text>

                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">权重</view>
                  <view class="award-details">
                    <text class="award-prize">30%</text>
                  </view>
                </view>
                <view class="award-item">

                  <view class="award-details">
                    <text class="award-name">总分:满分 40 分（荣誉奖 / 主题奖）、满分 20 分（优秀作品奖）、满分80分（最佳传播奖）</text>

                  </view>
                </view>
                <text class="award-desc">说明：视听语言是否新颖独特，创意是否富有感染力</text>
              </view>

              <view class="award-category">
                <view class="award-item">
                  <view class="award-name">维度</view>
                  <view class="award-details">
                    <text class="award-prize">品牌关联度</text>

                  </view>
                </view>
                <view class="award-item">
                  <view class="award-name">权重</view>
                  <view class="award-details">
                    <text class="award-prize">30%</text>

                  </view>
                </view>
                <view class="award-item">

                  <view class="award-details">
                    <text class="award-name">总分:满分 40 分（荣誉奖 / 主题奖）、满分 20 分（优秀作品奖）、满分80分（最佳传播奖）</text>

                  </view>
                </view>
                <text class="award-desc">说明：是否有品牌露出，是否与习酒品牌形象及君品文化调性契合</text>
              </view>

              <text class="section-content bold-number">17 客观数据评分（系统自动计算）</text>
              <text class="section-content">为保证评选结果的客观性与透明性，本次大赛采用系统自动抓取平台数据，杜绝人为干预。</text>
              <text class="section-content">参赛者需在报名时选择抖音或快手其中一个平台作为主赛道，该平台的数据将作为客观评分依据。</text>
              <text
                class="section-content">客观数据评分主要考量作品在平台上的曝光表现与互动热度，以确保获奖作品不仅具备艺术水准，也能赢得观众的关注与共鸣。计算方式以"曝光量+互动量"为核心，并结合占比加权算法，保证不同规模创作者在同一标准下公平竞争。</text>
              <text class="section-content">通过这一评分机制，赛事将全面衡量作品的社会传播力与受众认可度，从而确保获奖作品既代表中秋文化的精神内涵，也具备真实有效的传播价值。</text>
              <text class="section-content">依据数据：作品在抖音或者快手平台的曝光量、点赞量、评论量、转发量</text>
              <text class="section-content">计算方式（以抖音为例，快手同理）：</text>
              
              <view class="calculation-table">
                <view class="calc-table-header">客观数据评分计算方式</view>
                <view class="calc-table-row">
                  <view class="calc-table-label">平台</view>
                  <view class="calc-table-value">抖音或者快手（二选一）</view>
                </view>
                <view class="calc-table-row">
                  <view class="calc-table-label">曝光占比</view>
                  <view class="calc-table-value">作品曝光量 ÷ 所有入围作品最高曝光量</view>
                </view>
                <view class="calc-table-row">
                  <view class="calc-table-label">互动占比</view>
                  <view class="calc-table-value">（点赞 + 评论 + 转发） ÷ 所有入围作品最高互动</view>
                </view>
                <view class="calc-table-row full-row">
                  <view class="calc-table-full">客观得分 = （曝光占比 × 60% + 互动占比 × 40%) × 满分</view>
                </view>
                <view class="calc-table-row full-row">
                  <view class="calc-table-full">满分 60 分（荣誉奖 / 主题奖）、满分 80 分（优秀作品奖）、满分 20 分（最佳传播奖）</view>
                </view>
              </view>
              
              <text class="section-content bold-number">18 传播加权分（最高 10 分）</text>
              <text class="section-content">为鼓励参赛者在更多平台进行优质传播，扩大"光影中秋·团圆中国"大赛影响力，赛事特别设置传播加权分。传播表现不仅体现作品的受欢迎程度，也代表创作者在多平台上的号召力与影响力。优秀的传播成绩将成为评选的重要加分项。</text>
              <text class="section-content">统计口径统一为互动量：点赞 + 评论 + 转发（不含收藏/投币等），统计截止至 2025 年 10 月 8 日 00:00。</text>
              <text class="section-content">审核方式：参赛者需根据平台特性提交各平台作品链接或清晰截图（含作品页、发布时间、账号名、互动数据），由组委会人工核验。</text>
              <text class="section-content">违规处理：如发现虚假数据或刷量行为，主办方有权取消相关作品参赛及获奖资格。</text>
              <text class="section-content">适用对象：除主平台之外的其它平台，包括抖音 / 快手 / 视频号 / 小红书 / 微博 / 哔哩哔哩。</text>
              
              <view class="calculation-table">
                <view class="calc-table-row">
                  <view class="calc-table-label">计分口径</view>
                  <view class="calc-table-value">将以上平台的互动量累加后统一评估</view>
                </view>
                <view class="calc-table-row">
                  <view class="calc-table-label">记分公式</view>
                  <view class="calc-table-value">平台互动量（点赞+评论+转发）达到 1000，计+0.2分</view>
                </view>
                <view class="calc-table-row">
                  <view class="calc-table-label">说明</view>
                  <view class="calc-table-value">可多平台互动量相加。</view>
                </view>
                <view class="calc-table-row">
                  <view class="calc-table-label"></view>
                  <view class="calc-table-value">根据平台特性提供链接或者截图，截图需展示作品页、发布时间、账号名与互动数据。</view>
                </view>
                <view class="calc-table-row">
                  <view class="calc-table-label"></view>
                  <view class="calc-table-value">未在其它平台发布，得分为 0。</view>
                </view>
                <view class="calc-table-row">
                  <view class="calc-table-label"></view>
                  <view class="calc-table-value">加权分只针对除人气奖之外的其他奖项。</view>
                </view>
              </view>
              
              <text class="section-content bold-number">19 人气奖评分机制</text>
              <text class="section-content">适用奖项：最具人气奖</text>
              <text class="section-content">评分方式：100% 根据观众投票数统计</text>
              <text class="section-content">参与方式：作品通过朋友圈分享并获得投票</text>
              <text class="section-content">兼得说明：该奖可与其他奖项叠加</text>
            </view>

            <!-- 法律与版权 -->
            <view class="section" id="legal">
              <text class="section-title">十一、法律与版权</text>
              
              <text class="section-content bold-number">20 原创性要求</text>
              <text class="section-content">参赛作品必须为参赛者原创内容，不得抄袭、剽窃、套改他人作品，或侵犯他人合法权益（包括但不限于著作权、肖像权、商标权、名誉权等）。如因版权问题产生纠纷，由参赛者自行承担一切法律责任，主办方保留取消其参赛及获奖资格的权利。</text>
              
              <text class="section-content bold-number">21 版权归属与使用权</text>
              <text class="section-content">参赛作品的著作权归参赛者本人所有。参赛者授权主办方在不额外支付报酬的前提下，有权在包括但不限于品牌宣传、广告投放、媒体传播、赛事推广、展览展示等场景中非独家、长期、全球范围使用其参赛作品，可进行复制、剪辑、改编、传播等处理，用于习酒品牌相关用途。</text>
              
              <text class="section-content bold-number">22 人物肖像权与音乐版权</text>
              <text class="section-content">参赛者须确保作品中出现的所有人物均已获得授权同意使用其肖像，且所使用的视频背景音乐或素材具备合法使用权，避免侵权行为。使用平台官方配乐或模板素材的，视为已获授权许可。若因参赛作品存在侵权行为而造成任何法律责任或经济损失，责任由参赛者自行承担，主办方不承担任何连带责任。</text>
              
              <text class="section-content bold-number">23 违规行为与处理</text>
              <text class="section-content">如发现作品存在违法违规内容、数据作弊、非原创、虚假信息等行为，主办方有权取消其参赛资格、收回奖励，并保留追究相关责任的权利。</text>
              
              <text class="section-content bold-number">24 作品审核与违规修改处理</text>
              <text class="section-content">所有提交作品在参与评选前，均需通过主办方的初步内容审核。如发现以下情况，主办方有权要求参赛者在规定时间内进行修改并重新提交作品：</text>
              <text class="section-content">◦ 作品内容与活动主题严重偏离；</text>
              <text class="section-content">◦ 出现技术问题，如画面模糊、音频异常、播放失败等；</text>
              <text class="section-content">◦ 存在潜在版权、肖像权、内容安全或品牌形象等问题；</text>
              <text class="section-content">◦ 未使用或错误使用官方话题、命题资源、滤镜模板等；</text>
              <text class="section-content">◦ 其他违反大赛要求的情况。</text>
              
              <text class="section-content bold-number">25 主办方解释权</text>
              <text class="section-content">本赛事所有规则的最终解释权归贵州习酒有限责任公司所有。如有未尽事宜，主办方有权进行补充说明和修订。</text>
            </view>

            <!-- 联系我们 -->
            <view class="section" id="contact">
              <text class="section-title">十二、联系我们</text>
              
              <text class="section-content">如在报名、参赛、上传作品或其他过程中遇到任何问题，可通过以下方式与组委会联系：</text>
              <text class="section-content">联系邮箱：</text>
              <text class="section-content">联系电话：400-xxxx-xxx（工作日 09:00-18:00）</text>
              <text class="section-content">官方网站：<text class="red-text">svideo.gzxijiu.com</text></text>
              <text class="section-content">官方微信：关注"<text class="red-text">习酒短视频大赛</text>"官方公众号，获取最新通知与技术支持。</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 左侧固定悬浮目录按钮 -->
    <view class="floating-menu" @click="toggleMenu">
      <!-- <image class="floating-menu-icon" src="../../../assets/icon/menu.webp" mode="aspectFit" /> -->
      <view class="floating-menu-icon"></view>
      <text class="floating-menu-text">目录</text>
    </view>
    
    <!-- 目录弹窗 -->
    <view v-if="showMenu" class="menu-overlay" @click="closeMenu" :class="{ 'show': showMenu }">
      <view class="menu-popup" @click.stop :class="{ 'show': showMenu }">
        <view class="menu-header">
          <text class="menu-title">目录</text>
          <view class="menu-close" @click="closeMenu">
            <text class="close-icon">×</text>
          </view>
        </view>
        <view class="menu-content">
          <view 
            v-for="item in menuItems" 
            :key="item.id"
            class="menu-item"
            :class="{ active: activeItem === item.id }"
            @click="selectMenuItem(item)"
          >
            <text class="menu-item-text">{{ item.title }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import Taro from '@tarojs/taro'

// 弹窗状态管理
const showMenu = ref(false)

// 目录列表
const menuItems = [
  { id: '#overview', title: '一、大赛综述' },
  { id: '#theme', title: '二、大赛主题' },
  { id: '#time', title: '三、活动时间' },
  { id: '#participants', title: '四、参赛对象' },
  { id: '#topics', title: '五、参赛主题' },
  { id: '#tools', title: '六、创作辅助工具包' },
  { id: '#specs', title: '七、作品规范' },
  { id: '#rewards', title: '八、参赛奖励' },
  { id: '#participation', title: '九、参赛方式' },
  { id: '#evaluation', title: '十、评奖规则' },
  { id: '#legal', title: '十一、法律与版权' }
]

// 当前选中的菜单项
const activeItem = ref('theme')

// 切换弹窗显示状态
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// 关闭弹窗
const closeMenu = () => {
  showMenu.value = false
}

// 点击菜单项
const selectMenuItem = (item) => {
  activeItem.value = item.id
  closeMenu()
  const query = Taro.createSelectorQuery()
  query.select(item.id).boundingClientRect()
  query.selectViewport().scrollOffset()
  query.exec((res) => {
    Taro.pageScrollTo({
      scrollTop: res[0].top + res[1].scrollTop - 320,
      duration: 300
    })
  })
  // 这里可以添加滚动到对应章节的逻辑
}
</script>

<style lang="scss">
.theme-image-wdbg1{
  width: 100%;
  height: 90rpx;
  background: url(../../../assets/img/wdbg1.webp) no-repeat center/cover;
}
.theme-image-wdbg2{
  width: 100%;
  height: 90rpx;
  background: url(../../../assets/img/wdbg2.webp) no-repeat center/cover;
}
.theme-image-wdbg3{
  width: 100%;
  height: 90rpx;
  background: url(../../../assets/img/wdbg3.webp) no-repeat center/cover;
}
.theme-image-wdbg4{
  width: 100%;
  height: 90rpx;
  background: url(../../../assets/img/wdbg4.webp) no-repeat center/cover;
} 
.theme-image-wdbg5{
  width: 100%;
  height: 90rpx;
  background: url(../../../assets/img/wdbg5.webp) no-repeat center/cover;
}
.bg {
  width: 100%;
  background: linear-gradient(180deg, #DCEDFF 0%, rgba(220, 237, 255, 0.10) 100%), url(../../../assets/img/footer.webp) no-repeat center/cover;
  position: relative;
}

.top-nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 40rpx 20rpx;
  font-weight: 400;

  .download-btn {
    display: flex;
    align-items: center;


    .download-text {
      font-size: 28rpx;
      color: #1E507E;
      font-weight: 500;
    }
  }
}

.main-content {
  padding: 40rpx 13rpx;
  min-height: calc(100vh - 300rpx - 120rpx); // 使用min-height而不是固定height
  display: flex;
  flex-direction: column;

  .title-container {
    text-align: center;
    flex-shrink: 0;

    .main-title {
      display: block;
      font-size: 34rpx;
      color: #0E57A3;
      font-weight: 600;
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
.download-icon{
  width: 22rpx;
  height: 24rpx;
  margin-right: 8rpx;
  background: url(../../../assets/icon/download.webp) no-repeat center/cover;
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
  }
}

.manual-content {
  padding:0 28rpx; // 去掉所有padding，因为main-content已经有padding了
  flex: 1; // 填充剩余空间

  .section {
    margin-bottom: 60rpx;

    .section-title {
      display: block;
      font-size: 32rpx;
      color: #3D3D3D;
      font-weight: 600;
      margin-bottom: 30rpx;
      text-align: left;
      padding-bottom: 20rpx;
    }

    .section-content {
      display: block;
      font-size: 28rpx;
      color: #333333;
      font-weight: normal;
      line-height: normal;
      letter-spacing: 0em;
      font-variation-settings: "opsz" auto;
      font-feature-settings: "kern" on;
      white-space: pre-line;
      text-align: justify;
      text-indent: 2em;
      padding: 0;
      margin-bottom: 10rpx;

      &.bold-number {
        font-weight: 600;
      }

      &.bold-italic {
        font-weight: 600;
        font-style: italic;
        text-decoration: underline;
      }
    }
  }
}

.red-text {
  color: #ff0000;
  font-weight: 600;
}

.header-row {
  background: transparent !important;

  .table-cell {
    background: transparent !important;
    font-weight: 600;
    color: #0E57A3;
  }
}

.calculation-table {
  margin: 30rpx 0;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  overflow: hidden;
  
  .calc-table-header {
    background: transparent;
    padding: 20rpx;
    font-size: 28rpx;
    font-weight: 600;
    color: #333;
    text-align: center;
    border-bottom: 1rpx solid #ddd;
  }
  
  .calc-table-row {
    display: flex;
    border-bottom: 1rpx solid #eee;
    
    &:last-child {
      border-bottom: none;
    }
    
    &.full-row {
      .calc-table-full {
        text-align: left;
        width: 100%;
        padding: 20rpx 15rpx;
        font-size: 26rpx;
        color: #333;
        line-height: 1.4;
        text-align: center;
        font-weight: 500;
      }
    }
    
    .calc-table-label {
      flex: 0 0 200rpx;
      padding: 20rpx 15rpx;
      font-size: 26rpx;
      font-weight: 500;
      color: #333;
      background: transparent;
      border-right: 1rpx solid #eee;
      display: flex;
      align-items: center;
    }
    
    .calc-table-value {
      flex: 1;
      padding: 20rpx 15rpx;
      font-size: 26rpx;
      color: #666;
      line-height: 1.4;
      display: flex;
      align-items: center;
    }
  }
}

.theme-image {
  width: 100%;
  height: 88rpx;
  margin: 20rpx 0;
  display: block;
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
        background: transparent;
        padding: 20rpx;
        font-size: 28rpx;
        color: #000;
        text-align: center;
        font-weight: bold;
        border-bottom: 1rpx solid #ddd;
      }

      .table-row {
        display: flex;
        flex-direction: column;

        .table-cell {
          padding: 20rpx;
          font-size: 26rpx;
          line-height: 1.4;
          border-bottom: 1rpx solid #eee;

          &:last-child {
            border-bottom: none;
          }

          &.title-cell {
            color: #333;
            font-weight: 500;
            background: transparent;
          }

          &.url-cell {
            color: #666;
            background: transparent;
            word-break: break-all;
            padding-top: 10rpx;
          }

          &.content-cell {
            background: transparent;
            color: #333;
            flex: 1;
            text-align: justify;
          }
        }
      }
    }
  }
}

.award-category {
  margin: 30rpx 0;
  padding: 20rpx;
  border: 1rpx solid #e0e0e0;

  .award-category-title {
    display: block;
    font-size: 32rpx;
    font-weight: 600;
    color: #0E57A3;
    margin-bottom: 20rpx;
    text-align: center;
  }

  .award-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15rpx 0;
    border-bottom: 1rpx solid #e8e8e8;

    &:last-child {
      border-bottom: none;
    }

    .award-name {
      font-size: 28rpx;
      color: #333;
      font-weight: 500;
      flex: 1;
    }

    .award-details {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      .award-prize {
        font-size: 28rpx;
        color: #333;
        font-weight: 600;
        margin-bottom: 5rpx;
      }

      .award-count {
        font-size: 24rpx;
        color: #666;
      }
    }
  }

  .award-desc {
    display: block;
    font-size: 24rpx;
    color: #666;
    text-align: center;
    margin-top: 15rpx;
  }
}

.floating-menu {
  position: fixed;
  top: 530rpx;
  transform: translateY(-50%);
  background: #ffffff;
  border-radius: 0 40rpx 40rpx 0;
  padding: 10rpx 25rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.15);
  z-index: 1000;
  
  .floating-menu-icon{
    width: 25rpx;
    height: 25rpx;
    margin-right: 8rpx;
    background: url(../../../assets/icon/menu.webp) no-repeat center/cover;
  }
  
  .floating-menu-text {
    font-size: 24rpx;
    color: #333333;
    font-weight: 500;
  }
}

// 目录弹窗样式
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0);
  z-index: 2000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  transition: background-color 0.3s ease;
  
  &.show {
    background: rgba(0, 0, 0, 0.5);
  }
}

.menu-popup {
  background: #ffffff;
  border-radius: 20rpx 20rpx 0 0;
  width: 100%;
  max-height: 70vh;
  box-shadow: 0 -4rpx 20rpx rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transform: translateY(100%);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  &.show {
    transform: translateY(0);
  }
}

.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30rpx 40rpx 20rpx 40rpx;
  border-bottom: 1rpx solid #f0f0f0;
  
  .menu-title {
    font-size: 32rpx;
    font-weight: 600;
    color: #333333;
  }
  
  .menu-close {
    width: 60rpx;
    height: 60rpx;
    border-radius: 50%;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .close-icon {
      font-size: 36rpx;
      color: #666666;
      font-weight: 300;
      line-height: 1;
    }
  }
}

.menu-content {
  padding: 20rpx 0;
    max-height: 800rpx;
    overflow-y: auto;
    padding-bottom: 165rpx;
}

.menu-item {
  padding: 24rpx 40rpx;
  border-bottom: 1rpx solid #f8f8f8;
  transition: background-color 0.2s ease;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:active {
    background: #f8f9fa;
  }
  
  &.active {
    background: #e8f4fd;
    
    .menu-item-text {
      color: #0E57A3;
      font-weight: 600;
    }
  }
  
  .menu-item-text {
    font-size: 28rpx;
    color: #333333;
    line-height: 1.4;
    transition: color 0.2s ease;
  }
}
</style>
