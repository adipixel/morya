export type Song = {
  title: string;
  audioUrl?: string;
  lyrics?: string;
};

export type Category = {
  title: string;
  list: {
    [key: string]: Song;
  };
};

export type Categories = {
  [key: string]: Category;
};

const aarti: Category = {
  title: "आरत्या",
  list: {
    "sukhakarta-dukhaharta": {
      title: "सुखकर्ता दुखःहर्ता",
      audioUrl:
        "http://adityamhamunkar.com/bappamusic/aarti/3-durge-durgahat.mp3",
      lyrics: `
      सुखकर्ता दुखःहर्ता वार्ता विघ्नाची।
      नुरवी पुरवी प्रेम कृपा जयाची। 
      सर्वांगी सुंदर उटी शेंदुराची। 
      कंठी झळके माळ मुक्ताफळांची।।१॥ 
      
      जय देव जय देव जय मंगलमुर्ती ॥ 
      दर्शनमात्रे मन कामनापुर्ति॥ध्रु॥ 
      
      रात्नखचीत फरा तुज गौरिकुमरा। 
      चंदनाची उटी कुंकुम केशरा । 
      हिरेजडीत मुगुट शोभतो बरा। 
      रुणझुणती नुपुरे
      चरणी घागरिया ॥ जय देव॥२॥  
      
      लम्बोदर पितांबर फणिवरबंधना । 
      सरळ सोंड वक्र तुंड त्रिनयना।  
      दास रामाचा वाट पाहे सदना । 
      संकटी पावावे निर्वाणी रक्षावे 
      सुरवर वंदना ॥जय देव॥३॥      
      
      `,
    },

    "lavthavti-vikrala": {
      title: "लवथवती विक्राळा",
      audioUrl:
        "http://adityamhamunkar.com/bappamusic/aarti/3-durge-durgahat.mp3",
      lyrics: `
    लवथवती विक्राळा ब्रम्हांडी माळा
    विषे कंठ काळा त्रिनेत्री ज्वाळा  ।
    लावण्यसुंदर मस्तकी बाळा
    तेथुनिया जळ निर्मळ वाहे झुळझुळा
    जयदेव जयदेव जय श्रीशंकरा
    आरती ओवाळू तुज कर्पुरगौरा ॥  १ ॥
    
    कर्पुरगौरा भोळा  नयनी विशाळा
    अर्धांगी पार्वती सुमनांच्या माळा ।
    विभूतीचे उधळण शितिकठ निळा
    ऐसा शंकर शोभे उन्म्हा वेल्हाळा  ॥ २ ॥
    जयदेव…
    
    दैवी दैत्यी सागर मंथन पै  केले
    त्यामाजी अवचित हळाहळ  उठिले ।
    ते त्वा असुरपणे प्राशन  केले
    निळकंठ नाम प्रसिद्ध झाले  ॥॥ ३ ॥
    जयदेव…
    
    व्याघ्रांबर फणिवरधर सुंदर मदनारी
    पंचानन मनमोहन मुनिजन सुखकारी  ।
    शतकोटीचे बीज वाचे उच्चारी
    रघुकुळटिळक रामदासा अंतरी  ॥ ४ ॥
    जयदेव...
    `,
    },
    "durge-durghat": {
      title: "दुर्गे दुर्घट भारी",
      audioUrl:
        "http://adityamhamunkar.com/bappamusic/aarti/3-durge-durgahat.mp3",
      lyrics: `
        दुर्गे दुर्घट भारी तुजवीण संसारी
        अनाथ नाथे अंबे करुणा  विस्तारी ।
        वारी वारी जन्म मरणाते वारी
        हारी पडलो आता संकट निवारी ॥
        जय देवी जय देवी महिषासुरमर्दिनी
        सुरवर ईश्वर वरदे तारक संजीवनी ॥

        त्रिभुवन भुवनी पाहता तुज ऐसी नाही
        चारी श्रमले परंतु न बोलवे काही । 
        साही विवाद करिता पडले प्रवाही
        ते तू भक्तालागी पावसी लवलाही ॥
        जयदेव ...

        प्रसन्न वदने प्रसन्न होसी  निजदासा
        क्लेशा पासुनी सोडवी तोडी भवपाशा ।
        अंबे  तुज वाचून कोण पुरवील आशा
        नरहरी तल्लीन झाला पद्पंकजलेषा ॥
        जयदेव ... 
    `,
    },
  },
};

const gajar: Category = {
  title: "गजर",
  list: {
    ashtavinayak: {
      title: "अष्टविनायक",
    },
  },
};
const shlok: Category = {
  title: "श्लोक",
  list: {
    "sada-sarvada": {
      title: "सदा सर्वदा",
      lyrics: "",
    },
    "morya-morya": {
      title: "मोरया मोरया",
      lyrics: "",
    },
  },
};
const mangalashtak: Category = {
  title: "मंगलाष्टके",
  list: {
    "swasti-shree": {
      title: "स्वस्ति श्री",
    },
  },
};

export default { aarti, gajar, shlok, mangalashtak } as unknown as Categories;