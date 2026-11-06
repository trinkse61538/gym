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
  }
};
