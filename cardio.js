// Cardio & endurance catalog. Movement descriptions are instructional, not personalized medical clearance.
// Video URLs are exercise-specific searches (not unverified claims of a direct instructional video).
export const CARDIO_CATEGORIES = [
  {id:'machine',name:'Máy cardio',icon:'🚶',description:'Đi bộ máy, xe đạp, elliptical, chèo thuyền, cầu thang…'},
  {id:'bodyweight',name:'Trọng lượng cơ thể',icon:'🏃',description:'Ít tác động khớp, không cần dụng cụ; có thể tập cả khi bận máy.'},
  {id:'equipment',name:'Dụng cụ phòng gym',icon:'🪜',description:'Step, dây kháng lực, bóng, tạ nhẹ, thang agility…'}
];
export const EXTRA_CARDIO = {
  "mRow": {
    "name": "Rowing Ergometer — Easy Pace",
    "vi": "Máy chèo thuyền — nhịp nhẹ",
    "group": "Tim mạch",
    "cardioCategory": "machine",
    "equipment": "Máy chèo thuyền",
    "sets": 1,
    "reps": "10–15 phút",
    "rest": 0,
    "icon": "🚣",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Rowing%20Ergometer%20%E2%80%94%20Easy%20Pace%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Cài lực cản thấp; đặt bàn chân cố định, lưng giữ trung tính.",
      "Đẩy chân trước, ngả thân nhẹ từ hông rồi kéo tay về gần xương sườn dưới.",
      "Duỗi tay trước, gập hông rồi gập gối để trở về; duy trì nhịp đều."
    ],
    "breath": "Thở ra khi đẩy chân và kéo tay, hít vào khi thu về.",
    "avoid": "Không cong lưng, giật tay, kéo quá nhanh hoặc siết tạ bằng lưng dưới.",
    "alternatives": [
      "bike",
      "elliptical"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "10–15 phút",
    "intensity": "Vừa",
    "details": ""
  },
  "mRecumbent": {
    "name": "Recumbent Bike — Steady",
    "vi": "Xe đạp tựa lưng",
    "group": "Tim mạch",
    "cardioCategory": "machine",
    "equipment": "Xe đạp có tựa lưng",
    "sets": 1,
    "reps": "20–30 phút",
    "rest": 0,
    "icon": "🚴",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Recumbent%20Bike%20%E2%80%94%20Steady%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Điều chỉnh ghế để gối còn hơi gập ở điểm đạp xa nhất.",
      "Giữ lưng tựa đệm, đạp nhẹ nhàng ở lực cản thấp.",
      "Tăng thời lượng trước khi tăng kháng lực, cuối buổi đạp rất nhẹ."
    ],
    "breath": "Thở đều; có thể trò chuyện nguyên câu.",
    "avoid": "Không chỉnh ghế quá xa; tránh kháng lực làm gối đau.",
    "alternatives": [
      "bike",
      "treadmill"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "20–30 phút",
    "intensity": "Nhẹ",
    "details": ""
  },
  "mAirBike": {
    "name": "Air Bike — Low Resistance",
    "vi": "Xe đạp quạt gió nhẹ",
    "group": "Tim mạch",
    "cardioCategory": "machine",
    "equipment": "Air Bike / Assault Bike",
    "sets": 1,
    "reps": "10–18 phút",
    "rest": 0,
    "icon": "🚲",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Air%20Bike%20%E2%80%94%20Low%20Resistance%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Chỉnh ghế phù hợp, hai tay nắm tay cầm, thân ổn định.",
      "Đạp chân và đẩy/kéo tay ở nhịp chậm, không cố tăng tốc.",
      "Xen 2 phút nhẹ với 1 phút vừa, chỉ khi nói chuyện thoải mái."
    ],
    "breath": "Thở nhịp nhàng, không nín thở.",
    "avoid": "Air bike tăng tải rất nhanh khi đạp mạnh; không sprint.",
    "alternatives": [
      "bike",
      "mRecumbent"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "10–18 phút",
    "intensity": "Vừa",
    "details": ""
  },
  "mStair": {
    "name": "Stair Climber — Gentle",
    "vi": "Máy leo cầu thang nhẹ",
    "group": "Tim mạch",
    "cardioCategory": "machine",
    "equipment": "Máy Stair Climber",
    "sets": 1,
    "reps": "8–15 phút",
    "rest": 0,
    "icon": "🪜",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Stair%20Climber%20%E2%80%94%20Gentle%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Chọn mức tốc độ thấp nhất, đặt đủ bàn chân trên bậc.",
      "Bước đều, thân đứng thẳng, chỉ vịn nhẹ để cân bằng.",
      "Giảm nhịp ngay nếu thở nhanh quá hoặc thấy mỏi gối."
    ],
    "breath": "Thở đều, không nín thở.",
    "avoid": "Không dựa cả trọng lượng lên tay vịn hay bước quá nhanh.",
    "alternatives": [
      "mRecumbent",
      "treadmill"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "8–15 phút",
    "intensity": "Vừa",
    "details": ""
  },
  "mSki": {
    "name": "SkiErg — Technique First",
    "vi": "Máy trượt tuyết kéo cáp",
    "group": "Tim mạch",
    "cardioCategory": "machine",
    "equipment": "SkiErg",
    "sets": 1,
    "reps": "6–12 phút",
    "rest": 0,
    "icon": "🎿",
    "difficulty": "Nâng cao",
    "video": "https://www.youtube.com/results?search_query=SkiErg%20%E2%80%94%20Technique%20First%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Cài kháng lực thấp và đứng hai chân rộng bằng hông.",
      "Gập từ hông nhẹ, kéo tay cầm xuống bằng thân trên và hông.",
      "Duỗi lên chậm, tập nhịp kỹ thuật trước khi tính tốc độ."
    ],
    "breath": "Thở ra khi kéo xuống, hít vào lúc trở lên.",
    "avoid": "Không giật lưng hoặc kéo mạnh quá đầu; chưa nên dùng khi mới tập.",
    "alternatives": [
      "mRow",
      "elliptical"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "6–12 phút",
    "intensity": "Mạnh",
    "details": ""
  },
  "mArc": {
    "name": "Arc Trainer — Easy",
    "vi": "Máy Arc Trainer",
    "group": "Tim mạch",
    "cardioCategory": "machine",
    "equipment": "Máy Arc Trainer",
    "sets": 1,
    "reps": "15–25 phút",
    "rest": 0,
    "icon": "🚶",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Arc%20Trainer%20%E2%80%94%20Easy%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Bắt đầu ở mức kháng lực và độ dốc thấp.",
      "Bước theo quỹ đạo máy với gối cùng hướng bàn chân.",
      "Giữ thân thẳng, tăng thời gian thật chậm."
    ],
    "breath": "Thở đều, nói được câu nguyên vẹn.",
    "avoid": "Không tăng độ dốc và lực cản cùng một lúc.",
    "alternatives": [
      "elliptical",
      "bike"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "15–25 phút",
    "intensity": "Vừa",
    "details": ""
  },
  "mTreadIncline": {
    "name": "Gentle Incline Walk",
    "vi": "Đi bộ dốc nhẹ",
    "group": "Tim mạch",
    "cardioCategory": "machine",
    "equipment": "Treadmill",
    "sets": 1,
    "reps": "15–25 phút",
    "rest": 0,
    "icon": "⛰️",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Gentle%20Incline%20Walk%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "5 phút đầu đi dốc 0% ở 3,0–3,5 km/h.",
      "Nếu vững và dễ thở, đi 3,8–4,5 km/h ở dốc 1–2% trong 10–15 phút.",
      "Thả lỏng 5 phút dốc 0%; giảm tốc/dốc nếu hụt hơi."
    ],
    "breath": "Thở tự nhiên, tốc độ cho phép nói nguyên câu.",
    "avoid": "Tránh kiểu đi bộ dốc 10–15% khi chưa quen.",
    "alternatives": [
      "treadmill",
      "elliptical"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "15–25 phút",
    "intensity": "Vừa",
    "details": ""
  },
  "mBikeIntervals": {
    "name": "Bike Tempo Alternation",
    "vi": "Đạp xe thay đổi nhịp nhẹ",
    "group": "Tim mạch",
    "cardioCategory": "machine",
    "equipment": "Xe đạp cố định",
    "sets": 1,
    "reps": "20–25 phút",
    "rest": 0,
    "icon": "⏱️",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Bike%20Tempo%20Alternation%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Khởi động 5 phút đạp nhẹ ở lực cản thấp.",
      "Lặp 4 lần: 2 phút nhịp thoải mái + 1 phút nhanh hơn một chút nhưng vẫn nói được.",
      "Kết thúc đạp nhẹ 5 phút, không sprint."
    ],
    "breath": "Thở đều xuyên suốt các đoạn.",
    "avoid": "Đây không phải HIIT: giảm ngay khi phải ngắt câu để thở.",
    "alternatives": [
      "bike",
      "mRecumbent"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "20–25 phút",
    "intensity": "Vừa",
    "details": ""
  },
  "mCurved": {
    "name": "Curved Treadmill Walk",
    "vi": "Đi bộ máy cong tự đẩy",
    "group": "Tim mạch",
    "cardioCategory": "machine",
    "equipment": "Máy chạy bộ cong",
    "sets": 1,
    "reps": "8–15 phút",
    "rest": 0,
    "icon": "🚶",
    "difficulty": "Nâng cao",
    "video": "https://www.youtube.com/results?search_query=Curved%20Treadmill%20Walk%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Nhờ nhân viên hướng dẫn cơ chế tự đẩy của máy cong.",
      "Bắt đầu ở giữa băng, bước thật ngắn, bám tay vịn lúc làm quen.",
      "Đi đều chậm và ngừng máy theo hướng dẫn."
    ],
    "breath": "Giữ nhịp thở đều, giảm bước nếu hụt hơi.",
    "avoid": "Dễ tăng tốc ngoài ý muốn; không dùng nếu thăng bằng chưa tốt.",
    "alternatives": [
      "treadmill",
      "mRecumbent"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "8–15 phút",
    "intensity": "Vừa",
    "details": ""
  },
  "bwMarch": {
    "name": "March in Place",
    "vi": "Đi bộ nâng chân tại chỗ",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "2–5 phút",
    "rest": 0,
    "icon": "🚶",
    "difficulty": "Rất dễ",
    "video": "https://www.youtube.com/results?search_query=March%20in%20Place%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đứng thẳng, chân rộng bằng hông.",
      "Nâng từng chân như đi bộ và vung tay tự nhiên.",
      "Giữ nhịp bước giúp nói được nguyên câu."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không nâng gối quá cao nếu đau hông hoặc mất thăng bằng.",
    "alternatives": [
      "bwStepTouch",
      "treadmill"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "2–5 phút",
    "intensity": "Nhẹ",
    "details": ""
  },
  "bwStepTouch": {
    "name": "Side Step Touch",
    "vi": "Bước ngang chạm chân",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "2–4 phút",
    "rest": 0,
    "icon": "↔️",
    "difficulty": "Rất dễ",
    "video": "https://www.youtube.com/results?search_query=Side%20Step%20Touch%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Bước một chân sang ngang rồi đưa chân kia chạm nhẹ.",
      "Đổi hướng nhịp nhàng, đầu gối thả lỏng.",
      "Thêm vung tay nhỏ nếu thoải mái."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không xoay gối đột ngột hoặc bước quá rộng.",
    "alternatives": [
      "bwMarch",
      "bwSideSteps"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "2–4 phút",
    "intensity": "Nhẹ",
    "details": ""
  },
  "bwWalkJacks": {
    "name": "Step Jacks — No Jump",
    "vi": "Jumping jack không nhảy",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "30–60 giây/lượt",
    "rest": 0,
    "icon": "🙌",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Step%20Jacks%20%E2%80%94%20No%20Jump%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Bước chân phải sang bên đồng thời đưa tay lên trong biên độ thoải mái.",
      "Bước chân về giữa, đổi bên.",
      "Giữ gối mềm, không cần bật chân."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không cần nhảy hoặc vung tay quá đầu nếu đau vai.",
    "alternatives": [
      "bwStepTouch",
      "bwMarch"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "30–60 giây/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "bwShadowbox": {
    "name": "Light Shadow Boxing",
    "vi": "Đấm gió nhẹ, không tạ",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "1–3 phút/lượt",
    "rest": 0,
    "icon": "🥊",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Light%20Shadow%20Boxing%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đứng chân trước chân sau, hai tay ở gần ngực.",
      "Đưa tay từng bên ra trước nhẹ nhàng, xoay thân ít.",
      "Di chuyển chân rất nhỏ, giữ nhịp vừa sức."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không vung tay quá mức, khóa cứng khuỷu hoặc gồng nín thở.",
    "alternatives": [
      "bwMarch",
      "bwStepTouch"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "1–3 phút/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "bwSideSteps": {
    "name": "Lateral Walk",
    "vi": "Đi bước ngang liên tục",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "1–3 phút/lượt",
    "rest": 0,
    "icon": "↔️",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Lateral%20Walk%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đứng trong khoảng trống an toàn, đầu gối hơi mềm.",
      "Bước ngang 2–3 nhịp rồi đổi chiều.",
      "Giữ thân hướng trước, tăng nhịp khi thấy thoải mái."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không bắt chéo chân quá nhanh hoặc xoay thân mạnh.",
    "alternatives": [
      "bwStepTouch",
      "bwMarch"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "1–3 phút/lượt",
    "intensity": "Nhẹ",
    "details": ""
  },
  "bwHeelDig": {
    "name": "Alternating Heel Dig",
    "vi": "Chạm gót chân luân phiên",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "1–3 phút/lượt",
    "rest": 0,
    "icon": "👣",
    "difficulty": "Rất dễ",
    "video": "https://www.youtube.com/results?search_query=Alternating%20Heel%20Dig%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đặt gót chân phải hơi ra trước, mũi chân hướng lên.",
      "Đưa về rồi đổi chân trái, tay vung nhẹ.",
      "Giữ nhịp thư thái và thân thẳng."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không cúi gập lưng để chạm chân.",
    "alternatives": [
      "bwMarch",
      "bwStepTouch"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "1–3 phút/lượt",
    "intensity": "Nhẹ",
    "details": ""
  },
  "bwKneeLift": {
    "name": "Alternating Knee Raise",
    "vi": "Nâng gối thấp đổi chân",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "1–3 phút/lượt",
    "rest": 0,
    "icon": "🦵",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Alternating%20Knee%20Raise%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đứng thẳng, đặt tay gần thân để giữ thăng bằng.",
      "Nâng một gối đến tầm thoải mái rồi hạ; đổi bên.",
      "Có thể chạm tay vào gối nhưng không ép người gập sâu."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không nảy người, nâng cao quá mức hoặc kéo gối bằng tay.",
    "alternatives": [
      "bwMarch",
      "bwHeelDig"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "1–3 phút/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "bwButtKick": {
    "name": "Standing Hamstring Curl Steps",
    "vi": "Gập gót chân sau khi đứng",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "1–3 phút/lượt",
    "rest": 0,
    "icon": "👟",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Standing%20Hamstring%20Curl%20Steps%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đi tại chỗ và co gót chân về phía mông từng bên.",
      "Giữ gối gần nhau và thân đứng thẳng.",
      "Phối hợp tay tự nhiên, không cần chạy."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không đá gót mạnh hoặc ngả lưng quá mức.",
    "alternatives": [
      "bwMarch",
      "bwHeelDig"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "1–3 phút/lượt",
    "intensity": "Nhẹ",
    "details": ""
  },
  "bwCalfReach": {
    "name": "Squat to Calf Raise — Easy",
    "vi": "Ngồi nông rồi nhón gót",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "6–10 lần/lượt",
    "rest": 0,
    "icon": "🦵",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Squat%20to%20Calf%20Raise%20%E2%80%94%20Easy%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đứng rộng bằng vai, ngồi xuống rất nông như chạm ghế.",
      "Đứng lên từ từ rồi nhón gót nhẹ.",
      "Hạ gót có kiểm soát, nghỉ nếu thấy hụt hơi."
    ],
    "breath": "Hít vào khi hạ hông, thở ra khi đứng lên. Ngừng nghỉ khi cần.",
    "avoid": "Không ngồi sâu nếu gối đau; nhờ tay vịn khi mất thăng bằng.",
    "alternatives": [
      "bwMarch",
      "bwKneeLift"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "6–10 lần/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "bwSkaterStep": {
    "name": "Skater Step — No Jump",
    "vi": "Bước chéo mô phỏng trượt băng",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Không cần dụng cụ",
    "sets": 1,
    "reps": "30–60 giây/lượt",
    "rest": 0,
    "icon": "⛸️",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Skater%20Step%20%E2%80%94%20No%20Jump%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Bước chân phải sang bên, chân trái chạm nhẹ phía sau.",
      "Đổi hướng chậm, không nhảy.",
      "Cánh tay cân bằng tự nhiên, thân ổn định."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không bật nhảy hoặc đổi hướng đột ngột.",
    "alternatives": [
      "bwStepTouch",
      "bwSideSteps"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "30–60 giây/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "bwStairEasy": {
    "name": "Easy Stair Walk",
    "vi": "Lên xuống cầu thang chậm",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Cầu thang có tay vịn",
    "sets": 1,
    "reps": "3–8 phút",
    "rest": 0,
    "icon": "🪜",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Easy%20Stair%20Walk%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Bước từng bậc vững chắc và dùng tay vịn nếu cần.",
      "Đi chậm ở nhịp có thể nói chuyện, xuống cũng có kiểm soát.",
      "Nghỉ trên chiếu nghỉ hoặc đổi đi bộ phẳng khi mỏi."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không chạy cầu thang; tránh nếu chóng mặt hoặc đau gối.",
    "alternatives": [
      "treadmill",
      "bwMarch"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "3–8 phút",
    "intensity": "Vừa",
    "details": ""
  },
  "bwInclineClimber": {
    "name": "Incline Mountain Climber — Controlled",
    "vi": "Kéo gối chậm tay đặt bục cao",
    "group": "Tim mạch",
    "cardioCategory": "bodyweight",
    "equipment": "Bục vững chắc",
    "sets": 1,
    "reps": "20–40 giây/lượt",
    "rest": 0,
    "icon": "🏔️",
    "difficulty": "Nâng cao",
    "video": "https://www.youtube.com/results?search_query=Incline%20Mountain%20Climber%20%E2%80%94%20Controlled%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Tay đặt lên bục chắc, chân lùi sau thành tư thế plank nghiêng.",
      "Đưa từng gối về gần ngực chậm và luân phiên.",
      "Giữ thân ổn định và dừng khi không giữ được kỹ thuật."
    ],
    "breath": "Thở ra nhẹ khi đưa gối lên, hít vào khi đưa chân trở lại.",
    "avoid": "Không nhảy chân nhanh; không làm nếu đau cổ tay/lưng hoặc khó thở.",
    "alternatives": [
      "bwMarch",
      "bwKneeLift"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "20–40 giây/lượt",
    "intensity": "Mạnh",
    "details": ""
  },
  "gearStepUp": {
    "name": "Low Step Platform",
    "vi": "Bước lên bục thấp",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Bục step thấp",
    "sets": 1,
    "reps": "1–3 phút/lượt",
    "rest": 0,
    "icon": "🪜",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Low%20Step%20Platform%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Chọn bục thấp không trượt và đặt trước mặt.",
      "Bước một chân lên rồi chân còn lại; lần lượt bước xuống.",
      "Đổi chân dẫn, giữ thân thẳng và nhịp chậm."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không nhảy xuống bục hoặc chọn bục quá cao.",
    "alternatives": [
      "bwMarch",
      "gearToeTap"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "1–3 phút/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "gearToeTap": {
    "name": "Step Toe Taps",
    "vi": "Chạm mũi chân lên bục",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Bục step thấp",
    "sets": 1,
    "reps": "1–3 phút/lượt",
    "rest": 0,
    "icon": "👟",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Step%20Toe%20Taps%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đặt bục thấp cách chân nửa bước.",
      "Chạm lần lượt mũi chân lên bục rồi về sàn.",
      "Tăng nhịp từ từ và giữ hông ổn định."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không dồn trọng lượng lên bục làm bật nhảy.",
    "alternatives": [
      "bwMarch",
      "gearStepUp"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "1–3 phút/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "gearBandWalk": {
    "name": "Resistance Band Side Steps",
    "vi": "Bước ngang với dây mini band",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Dây mini band nhẹ",
    "sets": 1,
    "reps": "30–60 giây/lượt",
    "rest": 0,
    "icon": "➰",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Resistance%20Band%20Side%20Steps%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đeo mini band trên gối hoặc cổ chân theo sức.",
      "Gập gối nhẹ, bước ngang 2–3 bước rồi đổi hướng.",
      "Giữ đầu gối cùng hướng bàn chân."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không bước quá rộng để dây giật hoặc kéo gối vào trong.",
    "alternatives": [
      "bwSideSteps",
      "gearToeTap"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "30–60 giây/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "gearFarmer": {
    "name": "Light Farmer Carry",
    "vi": "Xách hai tạ nhẹ đi bộ",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Hai tạ đơn nhẹ",
    "sets": 1,
    "reps": "30–60 giây/lượt",
    "rest": 0,
    "icon": "🏋️",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Light%20Farmer%20Carry%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Chọn hai tạ nhẹ, nắm chắc, hạ vai tự nhiên.",
      "Đi bộ thẳng 15–30 m, bước ngắn và vững.",
      "Dừng hẳn và đặt tạ xuống an toàn trước khi nghỉ."
    ],
    "breath": "Thở đều trong khi đi, tránh giữ hơi khi mang tạ.",
    "avoid": "Không nín thở, không cố xách nặng hoặc để tạ kéo lệch người.",
    "alternatives": [
      "bwMarch",
      "gearMedCarry"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "30–60 giây/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "gearMedCarry": {
    "name": "Light Medicine Ball Carry",
    "vi": "Ôm bóng medicine đi bộ",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Bóng medicine nhẹ 1–3 kg",
    "sets": 1,
    "reps": "1–2 phút/lượt",
    "rest": 0,
    "icon": "🏐",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Light%20Medicine%20Ball%20Carry%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Ôm bóng nhẹ trước bụng/ngực, không ép sát cổ.",
      "Đi bộ chậm với thân thẳng, vai thả lỏng.",
      "Đặt bóng xuống và đi bộ không bóng khi mỏi."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không giữ bóng nặng khiến bạn phải nín thở.",
    "alternatives": [
      "bwMarch",
      "gearFarmer"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "1–2 phút/lượt",
    "intensity": "Nhẹ",
    "details": ""
  },
  "gearRopes": {
    "name": "Battle Rope Alternating Waves",
    "vi": "Đánh dây battle rope luân phiên",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Dây battle rope",
    "sets": 1,
    "reps": "15–30 giây/lượt",
    "rest": 0,
    "icon": "〰️",
    "difficulty": "Nâng cao",
    "video": "https://www.youtube.com/results?search_query=Battle%20Rope%20Alternating%20Waves%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đứng chân rộng bằng hông, gối hơi mềm, giữ hai đầu dây.",
      "Đưa tay lên xuống luân phiên với biên độ nhỏ, chậm.",
      "Dừng khi không còn thở đều; phục hồi đủ trước lượt sau."
    ],
    "breath": "Thở liên tục, không nín thở; nghỉ ngay khi không nói được.",
    "avoid": "Có thể tăng nhịp tim rất nhanh; không chọn làm bài khởi đầu.",
    "alternatives": [
      "bwShadowbox",
      "gearStepUp"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "15–30 giây/lượt",
    "intensity": "Mạnh",
    "details": ""
  },
  "gearSled": {
    "name": "Very Light Sled Push",
    "vi": "Đẩy xe sled rất nhẹ",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Xe đẩy sled và đường ray",
    "sets": 1,
    "reps": "15–25 m/lượt",
    "rest": 0,
    "icon": "🛒",
    "difficulty": "Nâng cao",
    "video": "https://www.youtube.com/results?search_query=Very%20Light%20Sled%20Push%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Để xe không tải hoặc rất nhẹ và kiểm tra đường đẩy trống.",
      "Tay đặt tay cầm, thân nghiêng vừa phải từ cổ chân.",
      "Đẩy bước đều 15–25 m, nghỉ hoàn toàn rồi mới lặp lại."
    ],
    "breath": "Thở liên tục trong khi đẩy; tuyệt đối tránh nín thở.",
    "avoid": "Không chất tạ nặng, không gồng giữ hơi, tránh nếu đau lưng/gối.",
    "alternatives": [
      "gearFarmer",
      "gearStepUp"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "15–25 m/lượt",
    "intensity": "Mạnh",
    "details": ""
  },
  "gearLadder": {
    "name": "Agility Ladder Walk-through",
    "vi": "Đi bộ theo ô thang tốc độ",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Thang agility đặt sàn",
    "sets": 1,
    "reps": "1–3 phút/lượt",
    "rest": 0,
    "icon": "🔳",
    "difficulty": "Dễ",
    "video": "https://www.youtube.com/results?search_query=Agility%20Ladder%20Walk-through%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đặt thang thẳng trên mặt sàn chống trượt.",
      "Bước một chân vào từng ô, giữ nhịp vừa.",
      "Đổi kiểu bước trái/phải chậm và chính xác."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không chạy nhanh hoặc xoay người đột ngột.",
    "alternatives": [
      "bwMarch",
      "bwSideSteps"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "1–3 phút/lượt",
    "intensity": "Nhẹ",
    "details": ""
  },
  "gearKettleMarch": {
    "name": "Light Kettlebell Suitcase Walk",
    "vi": "Xách kettlebell nhẹ đi bộ",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Kettlebell nhẹ",
    "sets": 1,
    "reps": "30–45 giây/bên",
    "rest": 0,
    "icon": "🔔",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Light%20Kettlebell%20Suitcase%20Walk%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Cầm một kettlebell nhẹ bên hông, thân thẳng.",
      "Đi bộ chậm đoạn ngắn và giữ vai ngang.",
      "Đổi bên sau thời gian nghỉ; ưu tiên nhẹ hơn nếu thân nghiêng."
    ],
    "breath": "Giữ nhịp hít thở tự nhiên trong suốt quãng đi.",
    "avoid": "Không nín thở hoặc nghiêng người để bù trọng lượng.",
    "alternatives": [
      "gearFarmer",
      "bwMarch"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "30–45 giây/bên",
    "intensity": "Vừa",
    "details": ""
  },
  "gearBoxLateral": {
    "name": "Lateral Step-Over Low Platform",
    "vi": "Bước ngang qua bục thấp",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Bục step thấp",
    "sets": 1,
    "reps": "30–60 giây/lượt",
    "rest": 0,
    "icon": "↔️",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Lateral%20Step-Over%20Low%20Platform%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Đứng cạnh bục thấp, kiểm tra độ ổn định.",
      "Bước một chân lên bục, chân kia theo rồi xuống phía đối diện.",
      "Quay lại chậm theo hướng còn lại, không bật nhảy."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không bước qua bục cao hoặc vặn gối khi đổi hướng.",
    "alternatives": [
      "gearStepUp",
      "bwSideSteps"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "30–60 giây/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "gearBandMarch": {
    "name": "Band-Resisted March",
    "vi": "Đi tại chỗ với dây nhẹ",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Dây kháng lực nhẹ, điểm neo chắc",
    "sets": 1,
    "reps": "30–60 giây/lượt",
    "rest": 0,
    "icon": "➿",
    "difficulty": "Cơ bản",
    "video": "https://www.youtube.com/results?search_query=Band-Resisted%20March%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Nhờ nhân viên kiểm tra điểm neo và lực dây nhẹ.",
      "Đặt dây quanh hông theo đúng hướng dẫn, đi tại chỗ chậm.",
      "Giữ thân thẳng và chân vững, không cố kéo dây thật căng."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Không dùng dây hỏng/điểm neo lỏng; không đeo dây quanh cổ.",
    "alternatives": [
      "bwMarch",
      "gearBandWalk"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "30–60 giây/lượt",
    "intensity": "Vừa",
    "details": ""
  },
  "gearJumpRope": {
    "name": "Jump Rope — Optional",
    "vi": "Nhảy dây cơ bản",
    "group": "Tim mạch",
    "cardioCategory": "equipment",
    "equipment": "Dây nhảy",
    "sets": 1,
    "reps": "20–40 giây/lượt",
    "rest": 0,
    "icon": "🪢",
    "difficulty": "Nâng cao",
    "video": "https://www.youtube.com/results?search_query=Jump%20Rope%20%E2%80%94%20Optional%20exercise%20proper%20form%20beginner%20demonstration",
    "steps": [
      "Chọn dây đúng chiều dài, thử nhảy rất thấp với tiếp đất êm.",
      "Xoay dây bằng cổ tay, giữ khuỷu gần người.",
      "Nghỉ đầy đủ; có thể chuyển sang mô phỏng xoay dây không nhảy."
    ],
    "breath": "Hít thở tự nhiên và đều đặn; vẫn nói được câu đầy đủ; nếu hụt hơi hãy chậm lại.",
    "avoid": "Tác động khớp và nhịp tim cao; chỉ nên thử khi đã thích nghi và được bác sĩ đồng ý nếu có triệu chứng.",
    "alternatives": [
      "bwWalkJacks",
      "gearToeTap"
    ],
    "primaryMuscle": "Tim mạch · sức bền",
    "secondaryMuscles": "Chân, thân giữa",
    "duration": "20–40 giây/lượt",
    "intensity": "Mạnh",
    "details": ""
  },

"mUprightBike": {
  "name": "Upright Bike — Steady",
  "vi": "Xe đạp ngồi thẳng",
  "group": "Tim mạch",
  "cardioCategory": "machine",
  "equipment": "Xe đạp upright",
  "sets": 1,
  "reps": "18–28 phút",
  "rest": 0,
  "icon": "🚴",
  "difficulty": "Dễ",
  "video": "https://www.youtube.com/results?search_query=Upright%20Bike%20beginner%20proper%20form",
  "steps": [
    "Chỉnh yên để đầu gối còn hơi gập ở điểm thấp nhất.",
    "Đạp nhẹ và đều trong 5 phút đầu, sau đó tăng nhịp vừa sức.",
    "Giữ vai thả lỏng, thân ổn định và giảm dần tốc độ 3–5 phút cuối."
  ],
  "breath": "Thở đều; vẫn nên nói được câu đầy đủ.",
  "avoid": "Không nhón vai hoặc đạp quá nặng ngay từ đầu.",
  "alternatives": [
    "bike",
    "mRecumbent"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Chân, thân giữa",
  "duration": "18–28 phút",
  "intensity": "Nhẹ",
  "details": ""
},
"mSpinSeated": {
  "name": "Spin Bike — Seated Easy",
  "vi": "Xe đạp spin ngồi yên",
  "group": "Tim mạch",
  "cardioCategory": "machine",
  "equipment": "Xe đạp spin",
  "sets": 1,
  "reps": "15–22 phút",
  "rest": 0,
  "icon": "🚲",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=spin%20bike%20beginner%20seated%20form",
  "steps": [
    "Điều chỉnh yên và tay lái sao cho lưng không quá gập.",
    "Đạp ngồi yên, kháng lực nhẹ đến vừa; ưu tiên vòng quay mượt.",
    "Không đứng đạp nếu mới tập hoặc khi đầu gối còn nhạy cảm."
  ],
  "breath": "Thở nhịp nhàng, tránh gồng vai và cổ.",
  "avoid": "Không tăng đồng thời cả tốc độ lẫn kháng lực quá nhanh.",
  "alternatives": [
    "bike",
    "mUprightBike"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Chân, thân giữa",
  "duration": "15–22 phút",
  "intensity": "Vừa",
  "details": ""
},
"mRowIntervals": {
  "name": "Rowing Ergometer — Gentle Alternation",
  "vi": "Máy chèo — đổi nhịp nhẹ",
  "group": "Tim mạch",
  "cardioCategory": "machine",
  "equipment": "Máy chèo thuyền",
  "sets": 1,
  "reps": "12–18 phút",
  "rest": 0,
  "icon": "🚣",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=rowing%20ergometer%20beginner%20intervals%20form",
  "steps": [
    "Khởi động 3–4 phút ở nhịp rất nhẹ.",
    "Lặp 4–5 vòng: 90 giây chèo thoải mái + 30 giây nhanh hơn một chút nhưng vẫn kiểm soát kỹ thuật.",
    "Kết thúc bằng 3 phút chèo nhẹ, ưu tiên trình tự chân–thân–tay."
  ],
  "breath": "Thở ra khi đẩy chân và kéo tay, hít vào khi trở về.",
  "avoid": "Không biến thành HIIT; kỹ thuật quan trọng hơn tốc độ.",
  "alternatives": [
    "mRow",
    "bike"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Chân, lưng, thân giữa",
  "duration": "12–18 phút",
  "intensity": "Vừa",
  "details": ""
},
"mEllipticalReverse": {
  "name": "Elliptical — Reverse Stride",
  "vi": "Elliptical bước lùi",
  "group": "Tim mạch",
  "cardioCategory": "machine",
  "equipment": "Máy Elliptical",
  "sets": 1,
  "reps": "12–20 phút",
  "rest": 0,
  "icon": "↩️",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=elliptical%20reverse%20stride%20beginner",
  "steps": [
    "Bắt đầu 3 phút bước xuôi với kháng lực thấp.",
    "Chuyển sang bước lùi chậm 5–10 phút để đổi cảm giác ở đùi và mông.",
    "Giữ thân thẳng, bám tay cầm nhẹ và giảm dần tốc độ cuối buổi."
  ],
  "breath": "Thở đều, duy trì mức có thể trò chuyện.",
  "avoid": "Không vặn gối hoặc nhún người theo tay cầm.",
  "alternatives": [
    "elliptical",
    "mArc"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Chân, mông",
  "duration": "12–20 phút",
  "intensity": "Vừa",
  "details": ""
},
"mTreadTempo": {
  "name": "Treadmill Tempo Walk",
  "vi": "Đi bộ máy đổi nhịp",
  "group": "Tim mạch",
  "cardioCategory": "machine",
  "equipment": "Máy chạy bộ",
  "sets": 1,
  "reps": "18–26 phút",
  "rest": 0,
  "icon": "🚶",
  "difficulty": "Dễ",
  "video": "https://www.youtube.com/results?search_query=treadmill%20tempo%20walk%20beginner",
  "steps": [
    "Khởi động 5 phút ở 3,2–3,8 km/h dốc 0–1%.",
    "Lặp 4–6 vòng: 2 phút ở nhịp thoải mái + 1 phút nhanh hơn chút nhưng vẫn nói được câu ngắn.",
    "Thả lỏng 4–5 phút ở tốc độ chậm hơn."
  ],
  "breath": "Thở tự nhiên; nếu phải ngắt câu để thở, giảm tốc độ.",
  "avoid": "Không bám tay vịn liên tục hoặc cố tăng dốc cao.",
  "alternatives": [
    "treadmill",
    "mTreadIncline"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Chân, thân giữa",
  "duration": "18–26 phút",
  "intensity": "Vừa",
  "details": ""
},
"mStairIntervalsEasy": {
  "name": "Stair Climber — Step & Recover",
  "vi": "Máy leo cầu thang đổi nhịp",
  "group": "Tim mạch",
  "cardioCategory": "machine",
  "equipment": "Máy Stair Climber",
  "sets": 1,
  "reps": "10–16 phút",
  "rest": 0,
  "icon": "🪜",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=stair%20climber%20beginner%20intervals",
  "steps": [
    "Đi 2 phút rất nhẹ để làm quen bậc thang.",
    "Lặp 5 vòng: 45 giây bước chủ động hơn + 75 giây hồi phục chậm.",
    "Giữ thân thẳng và chỉ vịn nhẹ để cân bằng."
  ],
  "breath": "Thở đều, xuống nhịp ngay khi quá gắng sức.",
  "avoid": "Không lao người lên tay vịn hoặc bước quá dài.",
  "alternatives": [
    "mStair",
    "mRecumbent"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Chân, mông",
  "duration": "10–16 phút",
  "intensity": "Vừa",
  "details": ""
},
"bwFastFeet": {
  "name": "Fast Feet in Place",
  "vi": "Chạy bước ngắn tại chỗ",
  "group": "Tim mạch",
  "cardioCategory": "bodyweight",
  "equipment": "Không dụng cụ",
  "sets": 1,
  "reps": "30–45 giây mỗi hiệp",
  "rest": 15,
  "icon": "⚡",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=fast%20feet%20exercise%20beginner",
  "steps": [
    "Đứng gối hơi chùng, thân thẳng, tay đánh nhẹ.",
    "Di chuyển bàn chân nhanh và ngắn tại chỗ, giữ nhịp đều.",
    "Sau hiệp, đi bộ tại chỗ 15–20 giây để hồi phục."
  ],
  "breath": "Thở ngắn và đều, không gồng cổ vai.",
  "avoid": "Không nhảy quá cao hoặc dậm chân quá mạnh.",
  "alternatives": [
    "bwMarch",
    "bwStepTouch"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Chân, bắp chân",
  "duration": "8–12 phút theo circuit",
  "intensity": "Vừa",
  "details": ""
},
"bwLateralShuffle": {
  "name": "Lateral Shuffle — Low Impact",
  "vi": "Di chuyển ngang thấp tác động",
  "group": "Tim mạch",
  "cardioCategory": "bodyweight",
  "equipment": "Không dụng cụ",
  "sets": 1,
  "reps": "30–40 giây mỗi hiệp",
  "rest": 20,
  "icon": "↔️",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=lateral%20shuffle%20low%20impact",
  "steps": [
    "Đứng chân rộng hơn vai một chút, gối mềm.",
    "Di chuyển ngang 2–3 bước rồi quay lại, giữ ngực hướng trước.",
    "Đánh tay tự nhiên để giữ nhịp tim tăng vừa phải."
  ],
  "breath": "Thở đều qua mũi-miệng, không nín thở khi đổi hướng.",
  "avoid": "Không xoay gối vào trong hoặc trượt chân trên mặt sàn trơn.",
  "alternatives": [
    "bwSideSteps",
    "bwStepTouch"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Đùi, mông",
  "duration": "8–12 phút theo circuit",
  "intensity": "Vừa",
  "details": ""
},
"bwStandingClimber": {
  "name": "Standing Mountain Climber",
  "vi": "Leo núi đứng",
  "group": "Tim mạch",
  "cardioCategory": "bodyweight",
  "equipment": "Không dụng cụ",
  "sets": 1,
  "reps": "30–45 giây mỗi hiệp",
  "rest": 15,
  "icon": "⛰️",
  "difficulty": "Dễ",
  "video": "https://www.youtube.com/results?search_query=standing%20mountain%20climber%20beginner",
  "steps": [
    "Đứng thẳng, hai tay chống trước như đang dựa tường vô hình.",
    "Luân phiên kéo gối lên gần ngực với tốc độ vừa phải.",
    "Giữ thân hơi nghiêng trước, bụng gồng nhẹ và đáp chân êm."
  ],
  "breath": "Thở đều theo nhịp bước chân, giảm tốc khi hụt hơi.",
  "avoid": "Không kéo gối quá cao làm mất thăng bằng.",
  "alternatives": [
    "bwMarch",
    "bwKneeLift"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Bụng, gập hông",
  "duration": "8–12 phút theo circuit",
  "intensity": "Nhẹ",
  "details": ""
},
"bwReachSquat": {
  "name": "Reach Squat",
  "vi": "Squat chạm cao",
  "group": "Tim mạch",
  "cardioCategory": "bodyweight",
  "equipment": "Không dụng cụ",
  "sets": 1,
  "reps": "12–18 lần hoặc 30–40 giây",
  "rest": 20,
  "icon": "⬆️",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=reach%20squat%20beginner",
  "steps": [
    "Đứng chân rộng bằng vai, ngồi squat nông vừa sức.",
    "Đứng lên và đồng thời vươn hai tay cao qua đầu.",
    "Giữ nhịp mượt, không cần xuống quá sâu."
  ],
  "breath": "Hít vào khi hạ, thở ra khi đứng lên vươn tay.",
  "avoid": "Không sụp đầu gối vào trong hoặc bật nhảy khi chưa cần.",
  "alternatives": [
    "bwMarch",
    "bwFastFeet"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Đùi, mông, vai",
  "duration": "8–12 phút theo circuit",
  "intensity": "Vừa",
  "details": ""
},
"bwWalkout": {
  "name": "Walkout to Plank",
  "vi": "Cúi đi tay ra plank",
  "group": "Tim mạch",
  "cardioCategory": "bodyweight",
  "equipment": "Thảm tập",
  "sets": 1,
  "reps": "6–10 lần",
  "rest": 20,
  "icon": "🪱",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=walkout%20to%20plank%20beginner",
  "steps": [
    "Từ đứng, gập hông chạm tay xuống sàn trong biên độ thoải mái.",
    "Đi tay ra trước đến tư thế plank cao, giữ 1 nhịp rồi đi tay về.",
    "Đứng dậy chậm, giữ bụng gồng nhẹ."
  ],
  "breath": "Thở ra khi đi tay ra hoặc đứng lên, hít vào khi trở về.",
  "avoid": "Không khóa gối cứng hoặc võng lưng ở plank.",
  "alternatives": [
    "bwStandingClimber",
    "bwMarch"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Vai, core, gân kheo",
  "duration": "8–12 phút theo circuit",
  "intensity": "Vừa",
  "details": ""
},
"bwBearMarch": {
  "name": "Bear Hover March",
  "vi": "Gấu bò tại chỗ",
  "group": "Tim mạch",
  "cardioCategory": "bodyweight",
  "equipment": "Thảm tập",
  "sets": 1,
  "reps": "20–30 giây mỗi hiệp",
  "rest": 25,
  "icon": "🐻",
  "difficulty": "Nâng cao",
  "video": "https://www.youtube.com/results?search_query=bear%20hover%20march%20beginner",
  "steps": [
    "Vào tư thế bốn điểm, nâng gối cách sàn vài centimet.",
    "Luân phiên nhấc nhẹ tay và chân đối diện hoặc chỉ di chuyển bước nhỏ tại chỗ.",
    "Giữ lưng tương đối phẳng và cổ trung tính."
  ],
  "breath": "Thở ngắn và đều, giảm thời gian hiệp nếu bụng rung quá nhiều.",
  "avoid": "Không nhô hông quá cao hoặc nín thở.",
  "alternatives": [
    "deadBug",
    "bwStandingClimber"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Core, vai, đùi",
  "duration": "6–10 phút theo circuit",
  "intensity": "Mạnh",
  "details": ""
},
"bwBoxerBounce": {
  "name": "Boxer Bounce",
  "vi": "Nhún chân kiểu boxing",
  "group": "Tim mạch",
  "cardioCategory": "bodyweight",
  "equipment": "Không dụng cụ",
  "sets": 1,
  "reps": "30–45 giây mỗi hiệp",
  "rest": 15,
  "icon": "🥊",
  "difficulty": "Dễ",
  "video": "https://www.youtube.com/results?search_query=boxer%20bounce%20beginner",
  "steps": [
    "Đứng nhẹ trên mũi bàn chân, đổi trọng lượng qua lại.",
    "Giữ hai tay ở tư thế thủ cơ bản và nhún thật nhẹ.",
    "Có thể kết hợp đấm thẳng chậm để tăng nhịp tim."
  ],
  "breath": "Thở đều, thả lỏng hàm và vai.",
  "avoid": "Không nhảy quá cao hoặc dậm gót mạnh xuống sàn.",
  "alternatives": [
    "bwShadowbox",
    "bwFastFeet"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Bắp chân, vai",
  "duration": "8–12 phút theo circuit",
  "intensity": "Nhẹ",
  "details": ""
},
"bwToeReach": {
  "name": "Alternating Toe Reach",
  "vi": "Chạm mũi chân luân phiên",
  "group": "Tim mạch",
  "cardioCategory": "bodyweight",
  "equipment": "Không dụng cụ",
  "sets": 1,
  "reps": "30–40 giây mỗi hiệp",
  "rest": 15,
  "icon": "🦶",
  "difficulty": "Dễ",
  "video": "https://www.youtube.com/results?search_query=alternating%20toe%20reach%20exercise",
  "steps": [
    "Đứng thẳng, luân phiên đá nhẹ chân trước và chạm tay đối diện vào mũi chân.",
    "Giữ ngực nâng và biên độ vừa phải để không kéo căng gân kheo quá mức.",
    "Duy trì nhịp đều như một bài warm-up năng động."
  ],
  "breath": "Thở đều theo nhịp đổi chân.",
  "avoid": "Không cúi gập lưng quá sâu hoặc khóa cứng gối.",
  "alternatives": [
    "bwMarch",
    "bwHeelDig"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Đùi sau, vai, core",
  "duration": "8–12 phút theo circuit",
  "intensity": "Nhẹ",
  "details": ""
},
"gearMedicineSlam": {
  "name": "Medicine Ball Slam — Light",
  "vi": "Đập bóng y tế nhẹ",
  "group": "Tim mạch",
  "cardioCategory": "equipment",
  "equipment": "Bóng y tế mềm",
  "sets": 1,
  "reps": "8–12 lần hoặc 20–30 giây",
  "rest": 25,
  "icon": "🏐",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=medicine%20ball%20slam%20light%20beginner",
  "steps": [
    "Chọn bóng đủ nhẹ để kiểm soát toàn bộ động tác.",
    "Nâng bóng lên quá đầu vừa phải, siết bụng rồi đập xuống sàn trước mặt.",
    "Nhặt bóng bằng cách gập hông và gối, không chỉ cúi lưng."
  ],
  "breath": "Thở ra mạnh khi đập bóng, hít vào khi nâng bóng lên.",
  "avoid": "Không dùng bóng quá nặng hoặc đập khi lưng đang khó chịu.",
  "alternatives": [
    "gearRopes",
    "gearBandPunch"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Vai, core, chân",
  "duration": "8–12 phút theo circuit",
  "intensity": "Vừa",
  "details": ""
},
"gearSandbagCarry": {
  "name": "Sandbag Carry",
  "vi": "Xách bao cát đi bộ",
  "group": "Tim mạch",
  "cardioCategory": "equipment",
  "equipment": "Sandbag hoặc túi cát mềm",
  "sets": 1,
  "reps": "20–40 giây mỗi hiệp",
  "rest": 20,
  "icon": "🧳",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=sandbag%20carry%20beginner",
  "steps": [
    "Ôm hoặc vác túi cát nhẹ ở vị trí ổn định.",
    "Đi bước ngắn và đều, giữ ngực cao, thân chắc.",
    "Đổi bên ôm/vác giữa các hiệp để cân bằng tải."
  ],
  "breath": "Thở đều từng bước, tránh nín thở khi nhấc túi.",
  "avoid": "Không chọn tải quá nặng làm lệch người nhiều.",
  "alternatives": [
    "gearFarmer",
    "core20"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Core, tay, chân",
  "duration": "10–15 phút theo circuit",
  "intensity": "Vừa",
  "details": ""
},
"gearConeShuffle": {
  "name": "Cone Shuffle",
  "vi": "Shuffle qua cọc mốc",
  "group": "Tim mạch",
  "cardioCategory": "equipment",
  "equipment": "Cọc mốc / marker",
  "sets": 1,
  "reps": "20–30 giây mỗi hiệp",
  "rest": 20,
  "icon": "📍",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=cone%20shuffle%20exercise%20beginner",
  "steps": [
    "Đặt 2–4 mốc cách nhau 1–2 mét.",
    "Di chuyển ngang hoặc tiến-lùi qua các mốc với bước ngắn, gối hơi chùng.",
    "Giữ mắt nhìn trước, tốc độ vừa phải và đổi hướng có kiểm soát."
  ],
  "breath": "Thở đều, giảm nhịp ngay khi mất kiểm soát chân.",
  "avoid": "Không xoay gối đột ngột hoặc đi trên mặt sàn trơn.",
  "alternatives": [
    "gearLadder",
    "bwLateralShuffle"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Chân, mông, core",
  "duration": "8–12 phút theo circuit",
  "intensity": "Vừa",
  "details": ""
},
"gearPlateMarch": {
  "name": "Plate Front Carry March",
  "vi": "Ôm đĩa tạ bước tại chỗ",
  "group": "Tim mạch",
  "cardioCategory": "equipment",
  "equipment": "Đĩa tạ nhẹ",
  "sets": 1,
  "reps": "30–45 giây mỗi hiệp",
  "rest": 20,
  "icon": "🛡️",
  "difficulty": "Dễ",
  "video": "https://www.youtube.com/results?search_query=plate%20front%20carry%20march",
  "steps": [
    "Ôm một đĩa tạ nhẹ trước ngực bằng hai tay.",
    "Bước tại chỗ nâng gối vừa phải, giữ thân ổn định.",
    "Có thể đi bộ chậm nếu có không gian."
  ],
  "breath": "Thở đều theo nhịp bước và giữ xương sườn không phồng quá mức.",
  "avoid": "Không ôm tạ quá nặng làm vai và lưng gù.",
  "alternatives": [
    "gearKettleMarch",
    "bwMarch"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Core, chân, vai",
  "duration": "8–12 phút theo circuit",
  "intensity": "Nhẹ",
  "details": ""
},
"gearStepKneeDrive": {
  "name": "Step-Up Knee Drive",
  "vi": "Bước bục kèm kéo gối",
  "group": "Tim mạch",
  "cardioCategory": "equipment",
  "equipment": "Bục thấp hoặc aerobic step",
  "sets": 1,
  "reps": "20–30 giây mỗi bên",
  "rest": 20,
  "icon": "🪜",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=step%20up%20knee%20drive%20beginner",
  "steps": [
    "Đặt một chân lên bục thấp, dồn lực qua chân trụ để bước lên.",
    "Khi đứng gần thẳng, kéo gối chân còn lại lên trước bụng.",
    "Bước xuống chậm và đổi bên theo hiệp hoặc sau mỗi rep."
  ],
  "breath": "Thở ra khi bước lên và kéo gối, hít vào khi xuống.",
  "avoid": "Không dùng bục quá cao hoặc dậm mạnh xuống sàn.",
  "alternatives": [
    "gearStepUp",
    "stepUp"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Đùi, mông, core",
  "duration": "8–12 phút theo circuit",
  "intensity": "Vừa",
  "details": ""
},
"gearBandPunch": {
  "name": "Band Punch-Out",
  "vi": "Đấm thẳng với dây kháng lực",
  "group": "Tim mạch",
  "cardioCategory": "equipment",
  "equipment": "Dây kháng lực neo sau lưng",
  "sets": 1,
  "reps": "20–30 giây mỗi hiệp",
  "rest": 20,
  "icon": "🥊",
  "difficulty": "Cơ bản",
  "video": "https://www.youtube.com/results?search_query=band%20punch%20out%20beginner",
  "steps": [
    "Neo dây ở sau lưng hoặc vòng nhẹ qua lưng, giữ hai đầu dây trong tay.",
    "Đấm thẳng luân phiên hoặc hai tay cùng lúc với nhịp nhanh vừa phải.",
    "Giữ chân đứng vững, thân không xoay quá mạnh."
  ],
  "breath": "Thở ngắn theo nhịp đấm, giữ vai thấp và hàm thả lỏng.",
  "avoid": "Không dùng dây quá nặng làm cổ vai gồng cứng.",
  "alternatives": [
    "bwShadowbox",
    "gearRopes"
  ],
  "primaryMuscle": "Tim mạch · sức bền",
  "secondaryMuscles": "Vai, ngực, core",
  "duration": "8–12 phút theo circuit",
  "intensity": "Vừa",
  "details": ""
}
};
