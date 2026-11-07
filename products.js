// Apple 台灣產品線速查資料。價格和機型會變動，更新時請先核對官方頁面。
window.CATALOG = {
  title: "Apple 全系列產品速查",
  updatedAt: "2026 / 11 / 07",
  groups: [
    {
      name: "iPhone",
      description: "依尺寸、相機、效能與預算協助顧客挑選",
      products: [
        p("iphone-duo", "iPhone Duo", "iPhone Duo", "NT$74,900 起", "phone", "violet", "追求新型態設計與頂級體驗的使用者", "你最在意螢幕、相機，還是攜帶手感？", ["新一代旗艦體驗", "高階相機與影像功能", "支援 Apple 生態系接續使用"], "實際容量、顏色與供貨依 Apple 台灣商店為準。", "https://www.apple.com/tw/iphone/"),
        p("iphone-18-pro", "iPhone 18 Pro／Pro Max", "iPhone 18 Pro 系列", "NT$44,900 起", "phone", "orange", "重視相機能力、效能與大螢幕的進階使用者", "你平常拍照錄影多，還是主要用手機處理工作？", ["Pro 系列相機與進階影像功能", "Pro 效能，適合高負載使用", "Pro 與 Pro Max 尺寸可選"], "不同尺寸、容量與功能以官方機型規格為準。", "https://www.apple.com/tw/iphone/"),
        p("iphone-air", "iPhone Air", "iPhone Air", "NT$39,900 起", "phone", "blue", "想要輕薄手感又重視日常效能的使用者", "你會長時間單手使用或常把手機帶著走嗎？", ["輕薄設計，適合日常攜帶", "iPhone 核心體驗與 Apple Intelligence", "與 Mac、iPad、Apple Watch 順暢搭配"], "產品特色與規格請依官方頁面及機型確認。", "https://www.apple.com/tw/iphone/"),
        p("iphone-17", "iPhone 17", "iPhone 17", "NT$32,900 起", "phone", "green", "想升級新款 iPhone、兼顧日常與拍攝的使用者", "你現在的手機最想改善哪一點？", ["日常使用流暢", "高品質照片與影片", "多種顏色與容量可選"], "確認尺寸、儲存容量和相容配件。", "https://www.apple.com/tw/iphone/"),
        p("iphone-17e", "iPhone 17e", "iPhone 17e", "NT$25,900 起", "phone", "blue", "重視基本 iPhone 體驗與價格的使用者", "預算大約在哪裡？最常用手機做什麼？", ["進入 iPhone 生態系的精簡選擇", "日常通訊、社群與拍攝需求", "搭配 iCloud 與其他 Apple 裝置"], "與 Pro 機型的相機、螢幕等規格不同，依需求比較。", "https://www.apple.com/tw/iphone/"),
        p("iphone-16", "iPhone 16", "iPhone 16", "NT$29,900 起", "phone", "orange", "想要成熟款式、價格與功能平衡的使用者", "你在意最新一代，還是希望控制購機預算？", ["完整 iPhone 日常功能", "適合通訊、內容與一般拍攝", "可依預算選擇容量"], "售價與實際供貨依 Apple 台灣商店為準。", "https://www.apple.com/tw/iphone/")
      ]
    },
    {
      name: "Mac",
      description: "筆電、桌上型電腦與外接顯示器",
      products: [
        p("macbook-neo", "MacBook Neo", "MacBook Neo", "NT$23,900 起", "laptop", "orange", "學生、家庭與日常文書使用者", "你主要會用電腦上課、文書，還是做影音創作？", ["適合日常工作與學習", "Mac 與 iPhone 協同使用", "輕巧筆電，方便攜帶"], "晶片、記憶體、儲存與鍵盤配置依選購款式確認。", "https://www.apple.com/tw/mac/"),
        p("macbook-air", "MacBook Air", "MacBook Air", "NT$42,900 起", "laptop", "blue", "通勤、上課及一般工作需要攜帶筆電的人", "你通常會帶電腦移動嗎？一天大約用多久？", ["輕薄便攜", "適合日常多工、文書與創作", "無風扇設計，使用安靜"], "尺寸、晶片、記憶體與儲存容量依型號而異。", "https://www.apple.com/tw/mac/"),
        p("macbook-pro-14", "MacBook Pro 14 吋", "MacBook Pro 14 吋", "NT$64,900 起", "laptop", "violet", "需要高效能又常移動的專業工作者", "你最常跑哪些專業軟體或工作流程？", ["面向專業工作流程的效能", "Liquid Retina XDR 顯示器", "多種連接埠，方便外接設備"], "晶片與配置差異會影響效能和價格，依訂購選項確認。", "https://www.apple.com/tw/mac/"),
        p("macbook-pro-xdr", "MacBook Pro 高階顯示配置", "MacBook Pro 高階款", "NT$97,900 起", "laptop", "violet", "影像、音樂與高負載專業創作者", "工作時會同時處理大型素材或多個專業應用程式嗎？", ["高階晶片配置選項", "適合密集創作與運算工作", "高亮度、高對比顯示體驗"], "最終品名及顯示器選配請依 Apple 台灣商店結帳頁核對。", "https://www.apple.com/tw/mac/"),
        p("imac", "iMac", "iMac", "NT$49,900 起", "desktop", "blue", "想要桌面簡潔、開箱即可使用的家庭或辦公室", "桌面空間多大？是否需要連接多台外接設備？", ["一體成型桌上型設計", "顯示器、相機、喇叭整合", "多種顏色融入工作空間"], "鍵盤、滑鼠、記憶體與儲存配置依選購款式確認。", "https://www.apple.com/tw/mac/"),
        p("mac-mini", "Mac mini", "Mac mini", "NT$29,900 起", "desktop", "green", "已有螢幕、鍵盤，想升級 Mac 桌機的使用者", "你手邊已經有螢幕或其他桌面配件嗎？", ["小巧桌上型主機", "可依需求搭配自己的螢幕與配件", "適合家庭、辦公與開發工作"], "顯示器、鍵盤與滑鼠需另行確認是否包含。", "https://www.apple.com/tw/mac/"),
        p("mac-studio", "Mac Studio", "Mac Studio", "NT$84,900 起", "desktop", "violet", "需要高階桌上型運算的專業創作者", "有沒有特定軟體、素材或效能瓶頸？", ["高效能桌上型工作站", "支援專業創作與大量運算", "可連接多部外接顯示器"], "晶片配置與連接能力依實際型號確認。", "https://www.apple.com/tw/mac/"),
        p("studio-display", "Studio Display", "Studio Display", "NT$52,900 起", "display", "blue", "需要 Mac 外接顯示器、重視畫面與視訊會議品質的人", "你要搭配哪一款 Mac？主要用來工作還是創作？", ["高解析度外接顯示器", "整合相機、麥克風與喇叭", "適合 Mac 桌面工作環境"], "支架、玻璃與連接方式依選購項目確認。", "https://www.apple.com/tw/mac/"),
        p("studio-display-xdr", "Studio Display XDR", "Studio Display XDR", "NT$97,900 起", "display", "violet", "對 HDR、色彩與高階影像工作有要求的專業使用者", "是否需要 HDR 參考監看或高亮度顯示？", ["面向專業創作的高階顯示器", "高動態範圍影像工作流程", "與 Mac 桌面環境整合"], "顯示器規格及選配請以 Apple 官方技術規格為準。", "https://www.apple.com/tw/mac/")
      ]
    },
    {
      name: "iPad",
      description: "從專業創作到輕巧隨身的平板選擇",
      products: [
        p("ipad-pro", "iPad Pro", "iPad Pro 11／13 吋", "NT$39,900 起", "tablet", "violet", "專業繪圖、影片剪輯與高階多工使用者", "你會用 Apple Pencil 創作，還是需要取代部分筆電工作？", ["高階顯示器與 ProMotion", "M 系列晶片效能", "支援 Apple Pencil Pro 與鍵盤配件"], "配件另售；尺寸、晶片及顯示器依型號確認。", "https://www.apple.com/tw/ipad/"),
        p("ipad-air", "iPad Air", "iPad Air 11／13 吋", "NT$24,900 起", "tablet", "blue", "學生與工作者，需要兼具便攜和效能的平板", "你偏好輕巧尺寸，還是更大的工作畫布？", ["適合學習、筆記與創作", "支援 Apple Pencil Pro", "有兩種螢幕尺寸可選"], "鍵盤和 Apple Pencil 需依需求另行選購。", "https://www.apple.com/tw/ipad/"),
        p("ipad", "iPad", "iPad 11 吋", "NT$14,900 起", "tablet", "green", "日常瀏覽、影音、筆記和家庭共享使用者", "平常會用平板追劇、閱讀，還是做筆記？", ["適合日常使用與入門學習", "支援 Apple Pencil USB-C", "可搭配鍵盤配件"], "Pencil 相容性及配件請依官方規格確認。", "https://www.apple.com/tw/ipad/"),
        p("ipad-mini", "iPad mini", "iPad mini 8.3 吋", "NT$22,900 起", "tablet", "orange", "重視單手攜帶、閱讀與外出記錄的使用者", "你會常在通勤或外出時拿出平板嗎？", ["輕巧尺寸，方便攜帶", "適合閱讀、筆記與外出使用", "支援 Apple Pencil Pro"], "螢幕尺寸及配件相容性依產品世代確認。", "https://www.apple.com/tw/ipad/")
      ]
    },
    {
      name: "Apple Watch",
      description: "日常健康、運動訓練與戶外活動",
      products: [
        p("watch-series-12", "Apple Watch Series 12", "Series 12", "NT$13,900 起", "watch", "green", "想掌握健康資訊、通知與日常活動的人", "你最想用手錶追蹤健康、運動，還是查看通知？", ["日常健康與活動追蹤", "與 iPhone 搭配接收通知", "多種錶殼、尺寸與錶帶選擇"], "健康功能不作為醫療診斷用途；功能依地區和型號而異。", "https://www.apple.com/tw/watch/"),
        p("watch-ultra-4", "Apple Watch Ultra 4", "Ultra 4", "NT$27,900 起", "watch", "orange", "戶外運動、耐用度與進階訓練需求較高的人", "平常會登山、潛水或長時間戶外運動嗎？", ["為戶外和耐力活動設計", "堅固錶殼與長效使用取向", "進階運動和定位功能"], "請依 Apple 官方技術規格確認防水及運動功能限制。", "https://www.apple.com/tw/watch/"),
        p("watch-se-3", "Apple Watch SE 3", "SE 3", "NT$7,900 起", "watch", "blue", "第一次使用智慧手錶或想控制預算的人", "你想先用手錶做到哪些日常事情？", ["重要通知與活動記錄", "直覺好上手", "進入 Apple Watch 的入門選擇"], "與 Series 和 Ultra 型號的感測器及功能不同。", "https://www.apple.com/tw/watch/"),
        p("watch-hermes-series", "Apple Watch Hermès Series 12", "Hermès Series 12", "NT$32,500 起", "watch", "orange", "重視精品工藝與個人風格的使用者", "你偏好經典皮革感、金屬質感還是運動風格？", ["Hermès 聯名錶面與錶帶", "Apple Watch 健康和連線體驗", "展現個人風格的精品選擇"], "錶帶材質、尺寸與供貨依配置選項而異。", "https://www.apple.com/tw/watch/"),
        p("watch-hermes-ultra", "Apple Watch Hermès Ultra 4", "Hermès Ultra 4", "NT$33,500 起", "watch", "violet", "同時重視戶外運動功能與精品設計的人", "你比較常戶外運動，還是想要聯名設計與收藏感？", ["Ultra 系列戶外運動取向", "Hermès 聯名錶帶與設計", "兼顧運動與個人風格"], "款式和尺寸選擇以 Apple 台灣商店為準。", "https://www.apple.com/tw/watch/")
      ]
    },
    {
      name: "AirPods",
      description: "日常聆聽、通勤降噪與耳罩式音訊",
      products: [
        p("airpods-5", "AirPods 5", "AirPods 5", "NT$4,490 起", "earbuds", "blue", "日常聽音樂、通話與 Apple 裝置切換的使用者", "你會長時間戴耳機，還是主要用來通勤和接電話？", ["輕巧真無線設計", "與 Apple 裝置快速配對", "支援空間音訊體驗"], "主動式降噪款式和一般款的配置不同，依型號確認。", "https://www.apple.com/tw/airpods/"),
        p("airpods-pro-3", "AirPods Pro 3", "AirPods Pro 3", "請洽官方商店", "earbuds", "violet", "通勤、旅行及重視主動式降噪的使用者", "你平常在吵雜環境使用耳機的時間多嗎？", ["入耳式設計與主動式降噪", "依耳塞貼合度調整聆聽體驗", "與 iPhone、iPad、Mac 搭配使用"], "耳塞尺寸、聽力健康及各項功能依產品頁說明。", "https://www.apple.com/tw/airpods/"),
        p("airpods-max-2", "AirPods Max 2", "AirPods Max 2", "請洽官方商店", "headphones", "orange", "偏好耳罩式配戴與沉浸聆聽的使用者", "你會在家或辦公室長時間聽音樂、看影片嗎？", ["耳罩式聆聽體驗", "主動式降噪與通透模式", "Apple 裝置間便利切換"], "重量、顏色、連線及音訊功能以官方規格為準。", "https://www.apple.com/tw/airpods/")
      ]
    },
    {
      name: "Apple Vision",
      description: "空間運算、沉浸式娛樂與全新工作方式",
      products: [
        p("vision-pro", "Apple Vision Pro", "Apple Vision Pro M5", "NT$129,900 起", "vision", "violet", "想體驗空間運算、沉浸式影音或空間 app 的使用者", "你想先用它看電影、工作，還是體驗空間內容？", ["沉浸式空間運算體驗", "空間照片、影片與 app", "可預約 Apple 直營店產品示範"], "需確認頭帶、光學鏡片需求及個人配戴舒適度。", "https://www.apple.com/tw/apple-vision-pro/" )
      ]
    },
    {
      name: "家庭與娛樂",
      description: "家庭劇院、智慧家庭與居家音訊",
      products: [
        p("apple-tv-4k", "Apple TV 4K", "Apple TV 4K 第 4 代", "NT$9,900", "tvbox", "black", "想把串流服務、照片與 Apple 裝置帶到電視上的家庭", "家中電視有 HDMI 嗎？平常主要看哪些串流服務？", ["將 Apple TV app 和串流服務整合到電視", "支援家庭共享與 AirPlay", "可作為相容智慧家庭的中樞"], "部分內容需訂閱；電視與 HDMI 線材需另備。", "https://www.apple.com/tw/apple-tv-4k/"),
        p("homepod-mini-2", "HomePod mini 2", "HomePod mini 2", "NT$4,790", "speaker", "blue", "想在房間聽音樂、使用 Siri 或控制智慧家庭的人", "你想放在哪個房間？需要控制哪些智慧家庭配件？", ["精巧居家智慧喇叭", "可搭配 Apple 裝置播放音訊", "支援 Siri 與相容智慧家庭配件"], "語音功能及智慧家庭控制須搭配相容裝置和配件。", "https://www.apple.com/tw/homepod-mini/"),
        p("homepod", "HomePod", "HomePod 第 2 代", "NT$10,990", "speaker", "black", "重視居家音樂聆聽與 Apple 家庭整合的使用者", "你希望單房間聆聽，還是搭配電視建立家庭劇院？", ["房間音訊與 Apple Music 體驗", "可與 Apple TV 搭配家庭劇院", "整合 Siri 與智慧家庭控制"], "立體聲配對和家庭劇院需符合機型及系統條件。", "https://www.apple.com/tw/homepod/" )
      ]
    },
    {
      name: "AirTag 與配件",
      description: "尋找重要物品，並搭配各類 Apple 配件",
      products: [
        p("airtag", "AirTag", "AirTag 第 2 代", "NT$990／單件", "tag", "white", "常忘記鑰匙、行李或其他隨身物品的 iPhone 使用者", "你最常找不到的是鑰匙、包包，還是行李？", ["透過「尋找」app 定位物品", "可選單件或四件裝", "可加購鑰匙圈或吊飾"], "需搭配相容 Apple 裝置和 Apple 帳號；AirTag 不適用於追蹤人或寵物。", "https://www.apple.com/tw/airtag/"),
        p("apple-pencil", "Apple Pencil Pro", "Apple Pencil Pro", "請洽官方商店", "pencil", "white", "在 iPad 上繪圖、標註或手寫筆記的使用者", "你手上的 iPad 型號是哪一代？", ["支援繪圖、手寫與精準標註", "與相容 iPad 配對使用", "適合筆記和創作工作流"], "購買前務必核對 iPad 相容型號。", "https://www.apple.com/tw/shop/accessories/all/apple-pencil"),
        p("magic-keyboard", "巧控鍵盤", "Mac／iPad 巧控鍵盤", "依型號而異", "keyboard", "black", "想為 Mac 或 iPad 建立更完整輸入工作區的使用者", "要搭配 Mac、iPad Pro 還是 iPad Air？", ["依裝置選擇對應鍵盤", "適合長時間輸入與工作", "部分 iPad 鍵盤含觸控式軌跡板"], "不同裝置的巧控鍵盤不可通用，請確認相容型號。", "https://www.apple.com/tw/shop/accessories/all/keyboards-mice"),
        p("apple-watch-bands", "Apple Watch 錶帶", "各款錶帶", "依款式而異", "band", "orange", "想改變手錶風格、場合搭配或配戴手感的人", "手錶錶殼尺寸是多少？平常運動還是日常配戴？", ["多種材質與風格可選", "可依場合替換搭配", "有 Apple 與合作品牌款式"], "購買前確認錶殼尺寸相容性與材質保養方式。", "https://www.apple.com/tw/shop/watch/bands")
      ]
    }
  ],
  highlights: [
    {
      eyebrow: "Apple 生態系",
      title: "裝置之間，接續使用",
      body: "依顧客目前使用的 iPhone、Mac、iPad、Apple Watch 或 AirPods，介紹相容功能與跨裝置工作流程。實際支援情況依型號、系統版本和地區而異。",
      linkText: "了解 Apple 裝置如何搭配",
      url: "https://www.apple.com/tw/continuity/",
      theme: "sand"
    },
    {
      eyebrow: "選購與支援",
      title: "先確認需求與相容性",
      body: "配件相容型號、網路與電信支援、AppleCare+、教育優惠及換購折抵，請依顧客所在地和 Apple 台灣最新條款確認。",
      linkText: "查看 Apple 台灣支援",
      url: "https://support.apple.com/zh-tw",
      theme: "mint"
    }
  ],
  finePrint: "本頁為 Apple 產品線速查原型，參考 Apple 台灣官方商店與產品頁。價格可能隨時間、配置及供貨變動；功能、相容性和服務條款請以官方最新資訊為準。第三方通路售價可能不同。",
  footerNote: "價格與產品資訊請定期核對 Apple 台灣官方頁面。"
};

function p(id, name, model, price, device, tone, fit, opener, points, note, specUrl) {
  return { id, name, shortName: name, model, price, device, tone, art: name.slice(0, 2), fit, opener, points, note, specUrl };
}
