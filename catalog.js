// GymOS exercise expansion: original Vietnamese form cues, equipment and safety notes.
// Video buttons open exercise-specific YouTube SEARCH results, not unverified direct video IDs.
export const MUSCLE_GROUPS = [
  {id:'chest',name:'Ngực',icon:'🫁',description:'Ngực trên, giữa, dưới; ưu tiên máy đẩy và ép ngực'},
  {id:'back',name:'Lưng',icon:'🪽',description:'Xô, lưng giữa, cầu vai và nhóm dựng sống'},
  {id:'shoulders',name:'Vai',icon:'🙌',description:'Vai trước, giữa, sau và cơ ổn định vai'},
  {id:'legs',name:'Chân',icon:'🦵',description:'Đùi trước, đùi sau, bắp chân và cơ khép đùi'},
  {id:'glutes',name:'Mông',icon:'🍑',description:'Mông lớn, mông nhỡ và ổn định hông'},
  {id:'biceps',name:'Tay trước',icon:'💪',description:'Cơ nhị đầu, cơ cánh tay và cẳng tay'},
  {id:'triceps',name:'Tay sau',icon:'⚡',description:'Ba đầu cánh tay: đầu dài, ngoài và trong'},
  {id:'core',name:'Bụng · Core',icon:'🧘',description:'Bụng thẳng, bụng chéo và ổn định thân giữa'},
];
const rows = {
chest: `
Machine Chest Press|Đẩy ngực máy ngang|Máy ngực|Ngực giữa|Chỉnh tay cầm ngang giữa ngực, chân bám sàn.|Đẩy tay cầm ra trước, khuỷu tay hơi mở; trả về chậm.|Không khóa khuỷu hoặc nhấc vai.|Dễ|press
Incline Chest Press Machine|Đẩy ngực trên bằng máy|Máy ngực dốc|Ngực trên|Chỉnh ghế để tay cầm ngang ngực trên.|Đẩy lên và ra trước theo quỹ đạo máy; hạ tạ chậm.|Không nâng vai sát tai hoặc ưỡn lưng.|Dễ|press
Pec Deck Fly|Ép ngực máy bướm|Máy pec deck|Ngực giữa|Chỉnh ghế để khuỷu tay ngang ngực, vai thả lỏng.|Khép hai cánh tay về trước ngực, mở lại từ từ.|Không để khuỷu quá xa sau thân gây căng vai.|Dễ|fly
Cable Chest Press|Đẩy ngực đứng bằng cáp|Giàn cáp|Ngực giữa|Đặt ròng rọc ngang ngực, bước một chân trước.|Đẩy hai tay ra trước, giữ thân ổn định.|Không nghiêng người hoặc vặn lưng để lấy đà.|Cơ bản|press
Standing Cable Fly|Ép ngực cáp ngang|Giàn cáp|Ngực giữa|Đặt ròng rọc ngang vai, khuỷu hơi gập.|Khép tay theo vòng cung trước ngực; mở chậm.|Không duỗi cứng khuỷu hoặc kéo quá sâu.|Cơ bản|fly
Low-to-High Cable Fly|Ép cáp từ thấp lên ngực trên|Giàn cáp|Ngực trên|Đặt ròng rọc thấp, đứng một chân trước.|Đưa tay từ ngang hông lên trước ngực trên theo vòng cung.|Không giật cáp bằng lưng hoặc nhún vai.|Cơ bản|fly
High-to-Low Cable Fly|Ép cáp từ cao xuống ngực dưới|Giàn cáp|Ngực dưới|Đặt ròng rọc cao hơn vai, bước chân vững.|Kéo tay chéo xuống trước bụng trên theo vòng cung.|Không khom lưng quá mức hoặc khóa khuỷu.|Cơ bản|fly
Flat Dumbbell Bench Press|Đẩy ngực tạ đơn ghế phẳng|Ghế phẳng + tạ đơn|Ngực giữa|Nằm vững, chân trên sàn, hai tạ gần ngực.|Đẩy tạ lên trên ngực, hạ chậm theo đường ổn định.|Không để tạ rơi xuống vai hoặc cong cổ tay.|Cơ bản|press
Incline Dumbbell Bench Press|Đẩy ngực trên tạ đơn|Ghế dốc 20–30° + tạ đơn|Ngực trên|Đặt ghế dốc vừa, hai vai áp ghế.|Đẩy hai tạ lên trên ngực trên, hạ từ từ.|Không dựng ghế quá cao làm vai chịu phần lớn tải.|Cơ bản|press
Flat Dumbbell Fly|Dang tạ đơn ghế phẳng|Ghế phẳng + tạ đơn|Ngực giữa|Nằm ghế, khuỷu hơi cong và giữ góc cố định.|Mở tay hai bên có kiểm soát rồi khép về phía trên ngực.|Không hạ tạ quá sâu hoặc dùng tạ nặng.|Cơ bản|fly
Incline Dumbbell Fly|Dang tạ đơn ghế dốc|Ghế dốc + tạ đơn|Ngực trên|Đặt ghế dốc nhẹ, hai tay trên ngực.|Mở tay theo vòng cung, dừng ở biên độ vai thoải mái.|Không duỗi cứng tay hoặc thả tạ đột ngột.|Cơ bản|fly
Smith Machine Flat Bench Press|Đẩy ngực ngang máy Smith|Máy Smith + ghế|Ngực giữa|Đặt ghế để thanh xuống ngang giữa ngực.|Hạ thanh có kiểm soát rồi đẩy thẳng lên.|Kiểm tra chốt an toàn; không để vai xoay ra trước.|Cơ bản|press
Smith Machine Incline Bench Press|Đẩy ngực trên máy Smith|Máy Smith + ghế dốc|Ngực trên|Chỉnh ghế dốc nhẹ đúng đường thanh trượt.|Hạ thanh gần ngực trên rồi đẩy lên.|Không kê ghế lệch khiến thanh chạm cổ.|Cơ bản|press
Barbell Bench Press|Đẩy ngực tạ đòn|Tạ đòn + ghế|Ngực giữa|Đặt mắt dưới thanh, chân bám đất, có người hỗ trợ khi cần.|Hạ thanh về ngực giữa rồi đẩy lên theo đường ổn định.|Không tập gần mức tối đa khi chưa có người hỗ trợ.|Nâng cao|press
Incline Barbell Bench Press|Đẩy ngực trên tạ đòn|Tạ đòn + ghế dốc|Ngực trên|Chỉnh dốc 20–30°, hai chân vững và bả vai tựa ghế.|Hạ thanh tới ngực trên rồi đẩy lên.|Không bật thanh khỏi ngực hoặc tập không có chốt.|Nâng cao|press
Decline Machine Chest Press|Đẩy ngực dưới bằng máy|Máy ngực dốc xuống|Ngực dưới|Chỉnh ghế theo hướng dẫn máy; cố định lưng.|Đẩy tay cầm ra trước hơi chếch xuống rồi trả về.|Không hạ tạ gây khó chịu khớp vai.|Cơ bản|press
Incline Push-Up|Hít đất tay kê cao|Bục chắc chắn|Ngực giữa|Hai tay trên bục cố định, thân thẳng, gót nhấc.|Hạ ngực gần bục rồi đẩy người ra.|Không võng hông hoặc dùng bục dễ trượt.|Dễ|press
Knee Push-Up|Hít đất chống gối|Thảm|Ngực giữa|Chống tay dưới vai, gối trên thảm, thân thẳng từ gối tới đầu.|Gập khuỷu hạ thân rồi đẩy lên.|Không chúi đầu hoặc võng lưng.|Dễ|press
Standard Push-Up|Hít đất tiêu chuẩn|Thảm|Ngực giữa|Tay dưới vai hơi rộng, chân duỗi, bụng siết nhẹ.|Hạ ngực về gần sàn, đẩy lên trong một khối.|Không xòe khuỷu ngang 90° hoặc võng bụng.|Cơ bản|press
Assisted Chest Dip|Nhúng ngực máy trợ lực|Máy dip trợ lực|Ngực dưới|Chỉnh trợ lực lớn, nghiêng thân nhẹ ra trước.|Gập khuỷu hạ có kiểm soát, đẩy trở lại.|Nếu đau vai hoặc chưa kiểm soát được, đổi máy đẩy ngực.|Nâng cao|press
`,
back: `
Wide-Grip Lat Pulldown|Kéo xô tay rộng trước ngực|Máy lat pulldown|Xô|Cố định đùi, nắm thanh rộng vừa hơn vai.|Kéo khuỷu về hai bên sườn, đưa thanh tới ngực trên.|Không kéo sau gáy hoặc ngả người quá mức.|Dễ|pull
Neutral-Grip Lat Pulldown|Kéo xô tay trung lập|Máy kéo xô + tay cầm V|Xô|Ngồi vững, nắm tay cầm lòng bàn tay đối nhau.|Kéo khuỷu xuống sát thân, đưa tay cầm gần ngực trên.|Không gồng cổ và dùng lưng đu người.|Dễ|pull
Close-Grip Lat Pulldown|Kéo xô tay hẹp|Máy kéo xô|Xô|Chọn tay cầm hẹp, cố định đùi.|Kéo khuỷu xuống về phía hông, thả tay lên chậm.|Không giật thanh hoặc ngửa lưng thành động tác chèo.|Dễ|pull
Single-Arm Lat Pulldown|Kéo xô một tay|Cáp cao 1 tay|Xô từng bên|Ngồi hoặc quỳ vững, vai thả xuống.|Kéo khuỷu một bên về hông, duỗi trở lại.|Không xoay thân theo cáp.|Cơ bản|pull
Seated Cable Row Neutral|Kéo cáp ngồi tay trung lập|Máy kéo cáp thấp|Lưng giữa|Ngồi thẳng, gối hơi mềm, lưng trung tính.|Kéo tay cầm về rốn, ép nhẹ bả vai rồi thả.|Không đu người ra sau để kéo nặng hơn.|Dễ|pull
Seated Cable Row Wide|Kéo cáp ngồi tay rộng|Máy cáp thấp + thanh rộng|Lưng trên|Giữ ngực mở, nắm rộng vừa.|Kéo khuỷu sang hai bên về phía bụng trên.|Không nhấc vai và vươn cổ.|Cơ bản|pull
Chest-Supported Machine Row|Kéo lưng máy tựa ngực|Máy row tựa ngực|Lưng giữa|Chỉnh ghế để ngực áp đệm.|Kéo khuỷu ra sau, đưa tay cầm về thân rồi thả chậm.|Không nhấc ngực khỏi đệm.|Dễ|pull
Iso-Lateral High Row|Kéo lưng cao từng bên|Máy high row độc lập|Xô trên|Ngồi tựa ngực, nắm hai tay cầm cao.|Kéo khuỷu xuống về gần sườn, trả tạ chậm.|Không bẻ cổ tay hoặc vặn lưng.|Dễ|pull
Iso-Lateral Low Row|Kéo lưng thấp từng bên|Máy low row độc lập|Lưng giữa|Chỉnh ghế và đệm ngực vừa tầm.|Kéo khuỷu về sau dưới đường vai rồi thả.|Không kéo bằng cơ lưng dưới.|Dễ|pull
One-Arm Dumbbell Row|Chèo tạ đơn một tay|Ghế + tạ đơn|Xô|Tựa tay và gối lên ghế, giữ lưng trung tính.|Kéo khuỷu về sát hông, hạ tạ chậm.|Không xoay thân hoặc nhún vai.|Cơ bản|pull
Incline Bench Dumbbell Row|Chèo tạ trên ghế dốc|Ghế dốc + tạ đơn|Lưng giữa|Nằm sấp tựa ngực lên ghế dốc.|Kéo hai khuỷu về phía hông, hạ chậm.|Không nhấc đầu hoặc dùng lực giật.|Cơ bản|pull
Bent-Over Barbell Row|Chèo tạ đòn gập hông|Tạ đòn|Lưng giữa|Gập hông, gối hơi chùng, lưng trung tính.|Kéo thanh về bụng dưới rồi hạ chậm.|Không làm nếu không giữ được lưng trung tính.|Nâng cao|pull
Smith Machine Bent-Over Row|Chèo lưng máy Smith|Máy Smith|Lưng giữa|Đứng ổn định, gập hông có kiểm soát.|Kéo thanh lên thân dưới rồi hạ.|Không dùng lưng dưới giật tạ.|Nâng cao|pull
Straight-Arm Cable Pulldown|Kéo cáp tay thẳng|Giàn cáp cao|Xô|Đứng vững, tay hơi cong, vai hạ.|Ép tay từ trước mặt xuống sát đùi, giữ khuỷu gần cố định.|Không gập khuỷu thành bài tay sau.|Cơ bản|pull
Cable Face Pull|Kéo cáp vào mặt|Cáp cao + dây thừng|Lưng trên|Đặt cáp ngang mặt, đứng vững, tay nắm dây.|Kéo hai tay về hai bên mặt, khuỷu mở vừa.|Không ngửa đầu hoặc nhún vai.|Dễ|pull
Reverse Pec Deck|Dang vai sau máy bướm ngược|Máy reverse pec deck|Lưng trên · vai sau|Ngực tựa đệm, nắm tay cầm trước mặt.|Mở hai cánh tay sang ngang, quay về chậm.|Không rướn cổ hoặc ưỡn lưng.|Dễ|pull
Assisted Pull-Up|Hít xà trợ lực|Máy hỗ trợ xà|Xô|Chọn mức trợ lực cao, nắm xà thoải mái.|Kéo thân lên bằng khuỷu xuống, hạ chậm.|Không đu chân hoặc rơi tự do.|Cơ bản|pull
Scapular Pull-Up|Kéo bả vai khi treo xà|Xà đơn|Ổn định bả vai|Treo có hỗ trợ nếu cần, giữ khuỷu gần thẳng.|Hạ bả vai xuống để nâng thân lên một chút rồi thả.|Không nhún vai nhanh hoặc treo nếu đau vai.|Nâng cao|pull
Machine Pullover|Kéo xô máy pullover|Máy pullover|Xô|Chỉnh ghế theo trục vai của máy.|Ép tay/đệm xuống về phía thân, thả lên từ từ.|Không quá ưỡn lưng để tạo biên độ.|Dễ|pull
Back Extension Machine|Duỗi lưng bằng máy|Máy back extension|Dựng sống|Chỉnh máy để đệm đỡ thân, biên độ nhỏ.|Duỗi thân từ gập nhẹ về tư thế trung tính.|Không ngửa quá mức hoặc dùng tạ lớn.|Cơ bản|hinge
`,
shoulders: `
Machine Shoulder Press|Đẩy vai bằng máy|Máy shoulder press|Vai trước · giữa|Chỉnh ghế để tay cầm ngang tai, lưng dựa đệm.|Đẩy lên theo quỹ đạo máy, trả tay chậm.|Không ưỡn lưng hoặc khóa khuỷu.|Dễ|press
Machine Lateral Raise|Nâng vai ngang máy|Máy nâng vai ngang|Vai giữa|Chỉnh ghế, cẳng tay tựa đệm.|Nâng khuỷu sang ngang đến gần ngang vai, hạ chậm.|Không nhún vai lên tai.|Dễ|raise
Cable Lateral Raise|Nâng vai ngang cáp|Cáp thấp|Vai giữa|Đứng cạnh giàn cáp, nắm tay cầm bên đối diện.|Nâng tay sang ngang có kiểm soát, hạ chậm.|Không đu người hoặc nâng quá cao khi đau.|Cơ bản|raise
Dumbbell Lateral Raise|Nâng vai ngang tạ đơn|Tạ đơn|Vai giữa|Đứng thẳng, tạ nhẹ hai bên thân, khuỷu hơi gập.|Nâng tay sang ngang tới ngang vai, hạ chậm.|Không vung tạ bằng hông.|Dễ|raise
Seated Dumbbell Shoulder Press|Đẩy vai tạ đơn ngồi|Ghế tựa + tạ đơn|Vai trước · giữa|Ngồi tựa lưng, tạ ngang tai, cổ tay thẳng.|Đẩy tạ lên theo đường ổn định rồi hạ chậm.|Không ưỡn lưng hoặc ép vai ở điểm đau.|Cơ bản|press
Neutral-Grip Dumbbell Shoulder Press|Đẩy vai tạ đơn tay trung lập|Ghế tựa + tạ đơn|Vai trước|Ngồi tựa, lòng bàn tay hướng vào nhau.|Đẩy tạ lên trên đầu trong biên độ thoải mái.|Không đẩy tạ sau đầu.|Cơ bản|press
Landmine Shoulder Press|Đẩy vai với thanh landmine|Thanh landmine|Vai trước|Đặt thanh landmine cố định, chân đứng vững.|Đẩy đầu thanh lên chéo trước mặt, hạ có kiểm soát.|Không xoay thân hoặc ưỡn lưng.|Cơ bản|press
Single-Arm Cable Shoulder Press|Đẩy vai một tay bằng cáp|Cáp thấp|Vai trước|Đặt tay cầm sát vai, đứng chân so le.|Đẩy tay lên trên đầu theo hướng thoải mái.|Không nghiêng thân để bù lực.|Cơ bản|press
Reverse Pec Deck Rear Delt|Dang vai sau máy|Máy reverse pec deck|Vai sau|Ngực tựa đệm, tay nắm trước mặt.|Mở tay sang hai bên ngang vai rồi thu lại.|Không rướn cổ hay nhún vai.|Dễ|raise
Bent-Over Dumbbell Reverse Fly|Dang vai sau tạ đơn gập hông|Tạ đơn|Vai sau|Gập hông, lưng trung tính, tạ nhẹ trước thân.|Mở tay sang hai bên rồi hạ chậm.|Không đung đưa thân hoặc gập cổ.|Cơ bản|raise
Cable Rear Delt Fly|Dang vai sau cáp|Giàn cáp|Vai sau|Đặt cáp ngang vai, bắt chéo tay cầm.|Mở tay sang hai bên, giữ khuỷu hơi cong.|Không nhún vai để kéo nặng.|Cơ bản|raise
Face Pull Rope|Kéo dây vào mặt|Cáp cao + dây|Vai sau|Đặt cáp ngang trán, đứng ổn định.|Kéo dây về hai bên mặt và xoay tay nhẹ ra ngoài.|Không ngửa lưng hoặc giật dây.|Dễ|pull
Dumbbell Front Raise|Nâng vai trước tạ đơn|Tạ đơn|Vai trước|Đứng thẳng, hai tạ nhẹ trước đùi.|Nâng một hoặc hai tay tới ngang vai, hạ chậm.|Không vung hông; không cần lên quá cao.|Cơ bản|raise
Cable Front Raise|Nâng vai trước cáp|Cáp thấp|Vai trước|Đứng quay lưng giàn cáp, giữ tay cầm thấp.|Nâng tay lên trước ngang vai rồi hạ.|Không ưỡn lưng.|Cơ bản|raise
Plate Front Raise|Nâng đĩa tạ trước mặt|Đĩa tạ nhẹ|Vai trước|Cầm đĩa bằng hai tay, vai thả lỏng.|Nâng đĩa lên ngang vai rồi hạ chậm.|Không dùng đĩa quá nặng.|Cơ bản|raise
Incline Bench Y Raise|Nâng tay chữ Y trên ghế dốc|Ghế dốc + tạ rất nhẹ|Vai sau · cơ thang dưới|Nằm sấp trên ghế dốc, ngón cái hướng lên.|Nâng tay theo hình chữ Y rồi hạ chậm.|Không nhún vai hoặc dùng tạ nặng.|Cơ bản|raise
Cable External Rotation|Xoay ngoài vai bằng cáp|Cáp thấp|Cơ chóp xoay|Đứng cạnh cáp, khuỷu kẹp gần thân.|Xoay cẳng tay ra ngoài trong biên độ nhỏ.|Không tách khuỷu hoặc xoay cả thân.|Dễ|rotate
Band External Rotation|Xoay ngoài vai bằng dây|Dây kháng lực|Cơ chóp xoay|Buộc dây ngang khuỷu, khuỷu sát sườn.|Xoay cẳng tay ra ngoài chậm, về vị trí đầu.|Không dùng dây quá căng hoặc nhấc vai.|Dễ|rotate
Smith Machine Shoulder Press|Đẩy vai máy Smith|Máy Smith + ghế|Vai trước|Đặt ghế tựa dưới thanh với đường chạy thoải mái.|Hạ thanh trước mặt đến ngang cằm rồi đẩy lên.|Không hạ thanh sau gáy; kiểm tra chốt.|Nâng cao|press
Dumbbell Shrug|Nhún cầu vai tạ đơn|Tạ đơn|Cầu vai trên|Cầm tạ hai bên, đứng thẳng, cổ trung tính.|Nâng vai thẳng lên rồi hạ có kiểm soát.|Không xoay vai vòng tròn hoặc rướn cổ.|Cơ bản|raise
`,
legs: `
45-Degree Leg Press|Đạp đùi máy 45°|Máy leg press 45°|Đùi trước|Đặt bàn chân ngang vai, lưng và hông áp đệm.|Hạ bàn đạp trong biên độ hông không cuộn rồi đạp ra.|Không khóa gối hoặc để mông nhấc khỏi ghế.|Dễ|press
Horizontal Leg Press|Đạp đùi máy ngang|Máy leg press ngang|Đùi trước|Chỉnh ghế, đặt toàn bộ bàn chân lên bàn đạp.|Đẩy bàn đạp đi rồi trả về chậm.|Không dồn lực lên mũi chân.|Dễ|press
Leg Extension Machine|Duỗi đùi trước máy|Máy leg extension|Đùi trước|Chỉnh trục máy cùng gối, đệm sát trước cổ chân.|Duỗi gối có kiểm soát rồi hạ từ từ.|Không đá giật hoặc khóa cứng gối.|Dễ|extend
Seated Leg Curl|Gập đùi sau ngồi máy|Máy leg curl ngồi|Đùi sau|Chỉnh trục theo gối, đệm cố định đùi.|Gập chân xuống/dưới ghế rồi trả chậm.|Không nhấc hông hoặc dùng đà.|Dễ|curl
Lying Leg Curl|Gập đùi sau nằm máy|Máy leg curl nằm|Đùi sau|Nằm úp, trục máy gần gối.|Gập gối đưa con lăn gần mông rồi hạ chậm.|Không ưỡn lưng hoặc nâng hông.|Dễ|curl
Standing Leg Curl|Gập đùi sau đứng một chân|Máy leg curl đứng|Đùi sau|Tựa thân vào máy, cố định chân trụ.|Gập một gối về sau, trả lại chậm.|Không lắc hông hoặc nhún chân trụ.|Dễ|curl
Hack Squat Machine|Squat máy hack|Máy hack squat|Đùi trước|Đặt vai và lưng sát đệm, chân ngang vai.|Hạ hông như ngồi xuống rồi đạp đứng lên.|Không để gối đổ vào trong hoặc hạ quá sâu.|Cơ bản|squat
Smith Machine Squat|Squat trên máy Smith|Máy Smith|Đùi trước|Đặt thanh trên cơ thang, bàn chân vững.|Ngồi xuống có kiểm soát, đứng lên qua cả bàn chân.|Dùng chốt an toàn; không đặt thanh lên cổ.|Cơ bản|squat
Goblet Squat|Squat ôm tạ đơn|Tạ đơn|Đùi trước|Giữ tạ sát ngực, chân rộng gần vai.|Ngồi xuống biên độ thoải mái rồi đứng lên.|Không chúi gối vào trong hoặc tròn lưng.|Dễ|squat
Bodyweight Box Squat|Squat ngồi ghế|Ghế/bục|Đùi trước|Đứng trước ghế chắc, chân ngang vai.|Đưa hông xuống chạm ghế nhẹ rồi đứng lên.|Không thả người rơi xuống ghế.|Dễ|squat
Bulgarian Split Squat|Squat chân sau kê ghế|Ghế + tạ tùy chọn|Đùi trước|Đặt chân sau lên ghế thấp, chân trước đủ xa.|Hạ người thẳng xuống, đẩy chân trước đứng lên.|Không làm nếu mất thăng bằng; dùng tay vịn.|Nâng cao|lunge
Reverse Lunge|Chùng chân bước lùi|Thảm + tạ tùy chọn|Đùi trước|Đứng thẳng, bước một chân ra sau.|Hạ gối sau có kiểm soát rồi đẩy chân trước đứng lên.|Không bước quá ngắn gây dồn gối.|Cơ bản|lunge
Walking Lunge|Chùng chân đi bộ|Sàn trống|Đùi trước|Đứng vững, bước dài vừa phải.|Hạ người theo bước đi, đổi chân liên tiếp.|Không di chuyển quá nhanh hoặc mất thăng bằng.|Cơ bản|lunge
Dumbbell Step-Up|Bước bục cầm tạ|Bục thấp + tạ đơn|Đùi trước|Chọn bục thấp, đặt cả bàn chân lên.|Đạp chân trên bục bước lên, hạ chậm.|Không đạp mạnh bằng chân sau.|Cơ bản|step
Romanian Deadlift Dumbbells|Romanian deadlift tạ đơn|Tạ đơn|Đùi sau|Giữ tạ sát đùi, gối hơi chùng.|Đẩy hông ra sau, hạ tạ gần chân rồi đứng thẳng.|Không cong lưng hoặc hạ quá tầm gân kheo.|Cơ bản|hinge
Romanian Deadlift Barbell|Romanian deadlift tạ đòn|Tạ đòn|Đùi sau|Giữ thanh sát chân, lưng trung tính.|Gập hông kéo dài đùi sau rồi duỗi hông đứng lên.|Không biến thành squat hoặc giật thanh.|Nâng cao|hinge
Seated Calf Raise|Nhón bắp chân ngồi máy|Máy calf raise ngồi|Bắp chân (soleus)|Đặt phần trước bàn chân lên bệ, đệm trên đùi.|Hạ gót từ từ rồi nhón lên cao có kiểm soát.|Không bật nhún bằng gân Achilles.|Dễ|raise
Standing Calf Raise|Nhón bắp chân đứng máy|Máy calf raise đứng|Bắp chân (gastrocnemius)|Đặt mũi chân trên bệ, thân thẳng.|Hạ gót trong biên độ thoải mái rồi nhón lên.|Không khóa đầu gối quá căng hoặc bật nhảy.|Dễ|raise
Hip Adduction Machine|Khép đùi bằng máy|Máy adductor|Cơ khép đùi|Ngồi thẳng, chỉnh đệm trong đùi.|Khép chân nhẹ nhàng rồi mở chậm.|Không ép mở quá rộng gây đau háng.|Dễ|close
Hip Abduction Machine|Dạng đùi bằng máy|Máy abductor|Cơ dạng hông|Ngồi tựa lưng, chân chạm đệm.|Mở gối sang hai bên rồi khép chậm.|Không xoay thân hoặc dùng lực giật.|Dễ|open
`,
glutes: `
Glute Bridge Floor|Nâng hông trên sàn|Thảm|Mông lớn|Nằm ngửa gập gối, chân đặt gần mông.|Siết mông nâng hông đến thân thẳng rồi hạ chậm.|Không ưỡn lưng ở đỉnh.|Dễ|hinge
Hip Thrust Machine|Đẩy hông bằng máy|Máy hip thrust|Mông lớn|Chỉnh đệm vào ngang xương chậu, chân chắc trên bệ.|Đẩy hông lên bằng lực gót chân rồi hạ.|Không ngửa đầu hoặc ưỡn lưng quá mức.|Dễ|hinge
Smith Machine Hip Thrust|Đẩy hông máy Smith|Máy Smith + ghế|Mông lớn|Tựa vai lên ghế, lót đệm thanh qua hông.|Nâng hông ngang thân, dừng 1 giây rồi hạ.|Không để thanh ép trực tiếp vào xương chậu.|Cơ bản|hinge
Barbell Hip Thrust|Đẩy hông tạ đòn|Ghế + tạ đòn|Mông lớn|Đệm thanh ngang hông, lưng trên tựa ghế.|Đẩy hông lên bằng chân, hạ có kiểm soát.|Không tăng tạ nhanh hoặc cong lưng.|Nâng cao|hinge
Dumbbell Hip Thrust|Đẩy hông tạ đơn|Ghế + tạ đơn|Mông lớn|Tựa lưng trên ghế, đặt tạ có đệm trên hông.|Nâng hông lên, siết mông rồi hạ chậm.|Không nâng quá cao làm lưng võng.|Cơ bản|hinge
Cable Glute Kickback|Đá chân ra sau bằng cáp|Cáp thấp + vòng cổ chân|Mông lớn|Bám khung, hơi gập hông, chân trụ mềm.|Đưa chân ra sau biên độ nhỏ bằng cơ mông rồi trả.|Không ưỡn lưng để đá cao.|Dễ|kick
Glute Kickback Machine|Đẩy mông máy kickback|Máy glute kickback|Mông lớn|Chỉnh tựa ngực và bàn đạp theo chiều cao.|Đẩy chân ra sau có kiểm soát rồi quay lại.|Không xoay xương chậu.|Dễ|kick
Quadruped Donkey Kick|Đá chân sau tư thế bốn điểm|Thảm|Mông lớn|Chống tay dưới vai, gối dưới hông, lưng trung tính.|Đưa một gót chân lên sau, hạ về không chạm mạnh.|Không võng lưng hoặc xoay hông.|Dễ|kick
Quadruped Fire Hydrant|Dạng gối tư thế bốn điểm|Thảm|Mông nhỡ|Chống tay gối trên thảm, hông thẳng.|Mở gối sang ngang trong biên độ nhỏ rồi khép.|Không nghiêng cả thân sang bên.|Dễ|open
Side-Lying Hip Abduction|Nằm nghiêng nâng chân|Thảm|Mông nhỡ|Nằm nghiêng, chân trên duỗi, hông xếp chồng.|Nâng chân trên lên 20–30 cm rồi hạ chậm.|Không lật mông ra sau.|Dễ|open
Seated Hip Abduction Machine|Dạng hông ngồi máy|Máy abductor|Mông nhỡ|Chỉnh máy ở biên độ thoải mái, lưng tựa.|Đẩy đầu gối ra ngoài rồi khép chậm.|Không bật chân hoặc ép quá rộng.|Dễ|open
Standing Cable Hip Abduction|Dạng hông đứng bằng cáp|Cáp thấp + vòng cổ chân|Mông nhỡ|Đứng nghiêng cạnh cáp, bám khung giữ thăng bằng.|Đưa chân ra ngang nhẹ rồi về vị trí đầu.|Không nghiêng thân để nâng chân.|Cơ bản|open
Mini-Band Lateral Walk|Đi ngang với dây vòng|Dây mini band|Mông nhỡ|Đeo dây trên gối, hơi khuỵu chân.|Bước ngang từng bước nhỏ, giữ lực căng dây.|Không lắc vai hoặc kéo gối đổ vào.|Dễ|step
Cable Pull-Through|Kéo cáp qua hai chân|Cáp thấp + dây|Mông lớn|Đứng quay lưng giàn cáp, cầm dây giữa hai chân.|Đẩy hông ra sau rồi duỗi hông đứng lên.|Không kéo bằng lưng hoặc ngồi xổm sâu.|Cơ bản|hinge
Dumbbell Romanian Deadlift Glute|RDL tạ đơn thiên mông|Tạ đơn|Mông lớn|Tạ sát chân, gối hơi chùng.|Đẩy hông ra sau, đứng lên bằng siết mông.|Không ưỡn lưng ở điểm kết thúc.|Cơ bản|hinge
Single-Leg Glute Bridge|Nâng hông một chân|Thảm|Mông lớn|Nằm ngửa, một chân trên sàn, chân kia nâng nhẹ.|Siết mông nâng hông thẳng rồi hạ chậm.|Không để hông xoay nghiêng.|Cơ bản|hinge
Frog Pump|Nâng hông hai lòng bàn chân chạm|Thảm|Mông lớn|Nằm ngửa, chạm hai lòng bàn chân, gối mở vừa.|Nâng hông bằng siết mông, hạ chậm.|Không ép gối mở quá mức nếu đau háng.|Dễ|hinge
High Step-Up Glute Bias|Bước bục thiên mông|Bục vừa|Mông lớn|Chọn bục đủ thấp để lưng không cong, hơi nghiêng hông.|Đạp chân trên bục đứng lên, hạ chậm.|Không chọn bục quá cao hoặc bật chân sau.|Cơ bản|step
Reverse Lunge Glute Bias|Chùng chân lùi thiên mông|Thảm + tạ tùy chọn|Mông lớn|Bước lùi dài vừa, nghiêng thân nhẹ từ hông.|Hạ xuống, đẩy gót chân trước đứng lên.|Không cong lưng hoặc để gối đổ vào.|Cơ bản|lunge
Banded Clamshell|Mở vỏ sò với dây|Thảm + dây vòng|Mông nhỡ|Nằm nghiêng gối gập, dây trên gối, gót chạm nhau.|Mở gối trên, giữ hông xếp chồng rồi khép.|Không lật thân ra sau.|Dễ|open
`,
biceps: `
Machine Biceps Curl|Cuốn tay trước bằng máy|Máy biceps curl|Nhị đầu cánh tay|Chỉnh trục máy với khuỷu, bắp tay áp đệm.|Gập khuỷu đưa tay về vai rồi duỗi từ từ.|Không nhấc bắp tay khỏi đệm.|Dễ|curl
Cable Biceps Curl Straight Bar|Cuốn tay trước cáp thanh thẳng|Cáp thấp + thanh|Nhị đầu cánh tay|Khuỷu sát sườn, cổ tay thẳng.|Gập khuỷu đưa thanh lên, hạ chậm.|Không đung đưa hông.|Dễ|curl
Cable Biceps Curl EZ Bar|Cuốn tay trước cáp thanh EZ|Cáp thấp + thanh EZ|Nhị đầu cánh tay|Cầm thanh theo góc cổ tay tự nhiên.|Gập khuỷu nâng thanh rồi hạ kiểm soát.|Không ngả lưng.|Dễ|curl
Dumbbell Alternating Curl|Cuốn tạ đơn luân phiên|Tạ đơn|Nhị đầu cánh tay|Đứng thẳng, hai tạ hai bên, khuỷu sát thân.|Gập một tay lên, xoay lòng bàn tay lên trên; đổi tay.|Không vung tay quá nhanh.|Dễ|curl
Dumbbell Simultaneous Curl|Cuốn hai tạ đơn cùng lúc|Tạ đơn|Nhị đầu cánh tay|Hai tay xuôi cạnh thân, vai thả lỏng.|Gập hai khuỷu cùng lúc, hạ chậm.|Không nhún vai khi lên tạ.|Cơ bản|curl
Hammer Curl Dumbbells|Cuốn búa tạ đơn|Tạ đơn|Cơ cánh tay · cánh tay quay|Cầm tạ lòng bàn tay quay vào nhau.|Gập khuỷu lên, hạ chậm không xoay tay.|Không kéo khuỷu ra trước nhiều.|Dễ|curl
Rope Hammer Curl|Cuốn búa bằng dây cáp|Cáp thấp + dây thừng|Cơ cánh tay|Giữ đầu dây lòng bàn tay hướng nhau.|Cuốn dây về vai rồi thả xuống chậm.|Không dùng lực kéo cả lưng.|Dễ|curl
Preacher Curl Machine|Cuốn tay trước máy ghế Scott|Máy preacher|Nhị đầu cánh tay|Tựa bắp tay lên đệm, trục gập gần khuỷu.|Gập khuỷu lên, trả về không duỗi quá đà.|Không bật tạ ở đáy.|Dễ|curl
EZ-Bar Preacher Curl|Cuốn tay trước thanh EZ ghế Scott|Ghế preacher + EZ bar|Nhị đầu cánh tay|Ngồi chỉnh ghế, ngực và tay tựa đệm.|Gập khuỷu nâng thanh rồi hạ chậm.|Không thả thanh rơi khi tay gần thẳng.|Cơ bản|curl
Incline Dumbbell Curl|Cuốn tay trước trên ghế dốc|Ghế dốc + tạ đơn|Đầu dài nhị đầu|Ngồi tựa ghế dốc, tay thả hai bên thân.|Gập khuỷu nâng tạ mà không đưa vai về trước.|Không đung đưa tay hoặc dùng tạ lớn.|Cơ bản|curl
Concentration Curl|Cuốn tạ đơn tập trung|Ghế + tạ đơn|Nhị đầu cánh tay|Ngồi mở chân, khuỷu tựa mặt trong đùi.|Gập khuỷu nâng tạ, hạ chậm.|Không nhấc khuỷu khỏi điểm tựa.|Cơ bản|curl
Spider Curl Dumbbells|Cuốn tạ trên ghế dốc nằm sấp|Ghế dốc + tạ đơn|Nhị đầu cánh tay|Nằm sấp ghế dốc, tay duỗi dưới thân.|Cuốn tạ lên gần vai rồi hạ kiểm soát.|Không lắc thân để kéo tạ.|Cơ bản|curl
Standing EZ-Bar Curl|Cuốn tay trước thanh EZ đứng|Thanh EZ|Nhị đầu cánh tay|Đứng thẳng, cổ tay ở góc thoải mái.|Gập khuỷu nâng thanh lên rồi trả chậm.|Không ưỡn lưng.|Cơ bản|curl
Standing Barbell Curl|Cuốn tay trước tạ đòn thẳng|Tạ đòn|Nhị đầu cánh tay|Giữ thanh rộng bằng vai, khuỷu gần sườn.|Cuốn lên trước ngực rồi hạ chậm.|Tránh nếu cổ tay đau với thanh thẳng.|Nâng cao|curl
Single-Arm Low Cable Curl|Cuốn cáp thấp một tay|Cáp thấp 1 tay|Nhị đầu từng bên|Đứng vững, khuỷu sát sườn.|Cuốn tay cầm lên vai rồi thả chậm.|Không xoay thân theo tay.|Dễ|curl
Bayesian Cable Curl|Cuốn cáp tay sau thân|Cáp thấp 1 tay|Đầu dài nhị đầu|Đứng quay lưng cáp, tay hơi ra sau thân.|Gập khuỷu kéo tay về phía vai rồi trả.|Không vặn vai quá xa sau thân.|Cơ bản|curl
High Cable Biceps Curl|Cuốn tay trước cáp cao|Hai cáp ngang vai|Nhị đầu cánh tay|Đứng giữa giàn cáp, hai tay dang ngang.|Gập khuỷu đưa nắm tay về gần thái dương rồi duỗi.|Không nhún vai và ép cổ.|Cơ bản|curl
Cross-Body Hammer Curl|Cuốn búa chéo ngực|Tạ đơn|Cơ cánh tay|Cầm tạ lòng bàn tay vào thân.|Đưa tạ chéo trước thân về vai đối diện, hạ.|Không vung khuỷu quá xa.|Dễ|curl
Reverse EZ-Bar Curl|Cuốn tay trước nắm sấp EZ|Thanh EZ|Cánh tay quay · cẳng tay|Cầm EZ lòng bàn tay úp, cổ tay thẳng.|Gập khuỷu đưa thanh lên rồi hạ chậm.|Không dùng tạ nặng làm gập cổ tay.|Cơ bản|curl
Resistance Band Biceps Curl|Cuốn tay trước với dây|Dây kháng lực|Nhị đầu cánh tay|Đứng lên dây, hai tay nắm đầu dây.|Gập khuỷu kéo dây lên rồi thả chậm.|Không để dây bật vào mặt.|Dễ|curl
`,
triceps: `
Cable Triceps Pushdown Rope|Ép tay sau bằng dây thừng|Cáp cao + dây|Tay sau|Khuỷu sát sườn, nắm hai đầu dây.|Duỗi khuỷu ép dây xuống, trả lên chậm.|Không xòe khuỷu hoặc chồm người.|Dễ|extend
Cable Triceps Pushdown Bar|Ép tay sau bằng thanh thẳng|Cáp cao + thanh|Tay sau|Đứng gần máy, khuỷu cố định cạnh thân.|Duỗi khuỷu đẩy thanh xuống, về chậm.|Không dùng vai đè thanh.|Dễ|extend
Cable Triceps Pushdown V-Bar|Ép tay sau thanh chữ V|Cáp cao + thanh V|Tay sau|Nắm thanh V, cổ tay giữ trung tính.|Duỗi khuỷu xuống cạnh hông, trả có kiểm soát.|Không khóa khớp mạnh.|Dễ|extend
Overhead Cable Triceps Extension Rope|Duỗi tay sau qua đầu bằng dây|Cáp + dây|Đầu dài tay sau|Đứng quay lưng giàn cáp, khuỷu hướng lên.|Duỗi khuỷu đưa dây lên trước trên đầu, gập về chậm.|Không võng lưng hoặc tách khuỷu quá rộng.|Cơ bản|extend
Single-Arm Cable Triceps Pushdown|Ép tay sau cáp một tay|Cáp cao 1 tay|Tay sau từng bên|Đứng vững, khuỷu một tay sát sườn.|Duỗi khuỷu xuống, trả lên chậm.|Không nghiêng thân để thắng lực.|Dễ|extend
Reverse-Grip Triceps Pushdown|Ép tay sau cáp nắm ngửa|Cáp cao + thanh|Tay sau|Cầm thanh lòng bàn tay hướng lên, tạ nhẹ.|Duỗi khuỷu ép thanh xuống rồi trả.|Không gập cổ tay quá mức.|Cơ bản|extend
Machine Triceps Extension|Duỗi tay sau bằng máy|Máy triceps extension|Tay sau|Chỉnh máy cho trục gần khuỷu, cánh tay áp đệm.|Duỗi khuỷu theo máy rồi gập về chậm.|Không dùng đà thân người.|Dễ|extend
Assisted Triceps Dip|Nhúng tay sau máy trợ lực|Máy dip trợ lực|Tay sau|Giữ thân tương đối thẳng, chọn trợ lực đủ lớn.|Gập khuỷu nhẹ, đẩy tay cầm xuống để lên.|Không hạ quá sâu gây đau vai.|Cơ bản|press
Seated Dip Machine|Ép tay sau máy dip ngồi|Máy seated dip|Tay sau|Ngồi tựa ghế, tay nắm hai bên.|Đẩy tay cầm xuống, trả về chậm.|Không gồng cổ hoặc nhấc mông.|Dễ|press
Dumbbell Overhead Triceps Extension|Duỗi tay sau tạ đơn qua đầu|Tạ đơn|Đầu dài tay sau|Cầm một tạ nhẹ bằng hai tay, khuỷu hướng lên.|Gập khuỷu đưa tạ sau đầu rồi duỗi lên.|Không ưỡn lưng; giảm biên độ nếu đau vai.|Cơ bản|extend
Single-Arm Dumbbell Overhead Extension|Duỗi tay sau một tay qua đầu|Tạ đơn|Đầu dài tay sau|Ngồi vững, tạ nhẹ trên đầu một tay.|Gập khuỷu đưa tạ sau đầu, duỗi lên.|Không để khuỷu xòe và cổ gập.|Cơ bản|extend
Dumbbell Triceps Kickback|Đá tay sau tạ đơn|Ghế + tạ đơn|Tay sau|Tựa một tay lên ghế, thân nghiêng, khuỷu ngang thân.|Duỗi khuỷu ra sau rồi gập về chậm.|Không vung vai hoặc xoay thân.|Cơ bản|extend
Cable Triceps Kickback|Đá tay sau bằng cáp|Cáp thấp|Tay sau|Nghiêng thân từ hông, khuỷu ở bên thân.|Duỗi khuỷu ra sau ngược lực cáp, gập về.|Không nhấc vai.|Cơ bản|extend
Lying Dumbbell Triceps Extension|Duỗi tay sau nằm với tạ đơn|Ghế + tạ đơn|Tay sau|Nằm ghế, hai tạ trên ngực, khuỷu ổn định.|Gập khuỷu đưa tạ hai bên đầu rồi duỗi.|Không để tạ rơi gần mặt.|Cơ bản|extend
EZ-Bar Skull Crusher|Duỗi tay sau nằm với EZ|Ghế + thanh EZ|Tay sau|Nằm chắc, giữ thanh trên ngực, khuỷu hướng lên.|Gập khuỷu hạ thanh về phía sau trán rồi duỗi.|Không nâng quá nặng khi thiếu người hỗ trợ.|Nâng cao|extend
Close-Grip Smith Machine Press|Đẩy ngực tay hẹp máy Smith|Máy Smith + ghế|Tay sau|Đặt tay hơi hẹp hơn vai, cổ tay thẳng.|Hạ thanh về ngực rồi đẩy lên, khuỷu gần thân.|Không nắm quá hẹp gây căng cổ tay.|Cơ bản|press
Close-Grip Bench Press|Đẩy ngực tay hẹp tạ đòn|Tạ đòn + ghế|Tay sau|Nằm ghế vững, nắm thanh hơi hẹp hơn vai.|Hạ thanh chậm về ngực, đẩy lên.|Dùng giá đỡ và người hỗ trợ khi cần.|Nâng cao|press
Diamond Push-Up Knees|Hít đất tay hẹp chống gối|Thảm|Tay sau|Chống gối, hai tay gần nhau nhưng cổ tay thoải mái.|Hạ ngực về tay rồi đẩy lên.|Không ép hai tay sát nhau nếu đau cổ tay.|Cơ bản|press
Bench Triceps Extension Bodyweight|Duỗi tay sau chống ghế cao|Bục cao cố định|Tay sau|Đặt hai tay lên bục vững, bước chân ra sau.|Gập khuỷu đưa đầu gần bục rồi đẩy thẳng tay.|Không gập cổ hoặc võng lưng.|Cơ bản|extend
Resistance Band Triceps Pushdown|Ép tay sau bằng dây kháng lực|Dây kháng lực + điểm neo cao|Tay sau|Neo dây chắc trên cao, khuỷu cạnh thân.|Duỗi khuỷu ép dây xuống rồi thả chậm.|Kiểm tra điểm neo để tránh dây bung.|Dễ|extend
`,
core: `
Dead Bug|Bọ chết giữ ổn định thân|Thảm|Bụng sâu|Nằm ngửa, hông gối 90°, tay lên trời, lưng trung tính.|Duỗi tay và chân đối diện chậm, đổi bên.|Không võng lưng dưới.|Dễ|brace
Bird Dog|Duỗi tay chân đối diện tư thế bốn điểm|Thảm|Core · dựng sống|Chống tay gối, lưng thẳng, mắt nhìn sàn.|Duỗi tay và chân đối diện, giữ ngắn rồi đổi bên.|Không nghiêng hông hoặc ưỡn lưng.|Dễ|brace
Front Plank Knees|Plank chống gối|Thảm|Bụng sâu|Chống khuỷu, gối trên thảm, thân thẳng.|Giữ bụng siết vừa, thở đều trong 15–30 giây.|Không nín thở hay võng hông.|Dễ|hold
Forearm Plank|Plank khuỷu tay|Thảm|Bụng sâu|Khuỷu dưới vai, chân duỗi, mông không quá cao.|Giữ thân thành đường thẳng, thở đều 15–30 giây.|Dừng nếu lưng dưới đau.|Cơ bản|hold
Side Plank Knees|Plank nghiêng chống gối|Thảm|Bụng chéo|Nằm nghiêng, khuỷu dưới vai, gối gập.|Nâng hông khỏi sàn, giữ 10–20 giây mỗi bên.|Không đổ vai lên tai.|Dễ|hold
Side Plank Straight Legs|Plank nghiêng chân thẳng|Thảm|Bụng chéo|Nằm nghiêng, chân chồng lên nhau, khuỷu dưới vai.|Nâng hông thành đường thẳng, giữ đều hơi thở.|Không xoay người hoặc sụp hông.|Cơ bản|hold
Machine Abdominal Crunch|Gập bụng bằng máy|Máy abdominal crunch|Bụng thẳng|Chỉnh ghế và đệm ngực theo máy, hông ổn định.|Cuộn thân nhẹ để xương sườn tiến về hông, thả chậm.|Không kéo bằng tay hoặc giật cổ.|Dễ|crunch
Cable Kneeling Crunch|Gập bụng quỳ kéo cáp|Cáp cao + dây|Bụng thẳng|Quỳ trên thảm, giữ dây cạnh đầu, hông tương đối cố định.|Cuộn thân, kéo xương sườn về hông rồi mở chậm.|Không kéo cáp bằng cánh tay.|Cơ bản|crunch
Stability Ball Crunch|Gập bụng trên bóng|Bóng tập|Bụng thẳng|Ngồi trên bóng rồi lùi đến lưng tựa bóng, chân vững.|Cuộn ngực hướng về hông, hạ từ từ.|Không ngửa lưng quá xa trên bóng.|Cơ bản|crunch
Reverse Crunch|Gập bụng ngược|Thảm|Bụng dưới|Nằm ngửa, gối gập, tay chống nhẹ hai bên.|Cuộn xương chậu nâng hông khỏi sàn chút ít rồi hạ.|Không vung chân để lấy đà.|Dễ|crunch
Bent-Knee Leg Raise Floor|Nâng gối nằm sàn|Thảm|Bụng dưới|Nằm ngửa, gối gập 90°, lưng dưới giữ ổn định.|Hạ gối từ từ ra xa rồi kéo về.|Không để lưng võng khi hạ chân.|Dễ|brace
Pallof Press|Đẩy cáp chống xoay thân|Cáp ngang ngực|Bụng chéo|Đứng vuông góc giàn cáp, chân ngang vai.|Đẩy tay ra trước và giữ thân không xoay, thu tay về.|Không vặn hông theo lực kéo.|Dễ|brace
Pallof Press Hold|Giữ cáp chống xoay|Cáp ngang ngực|Bụng chéo|Đứng chắc, cầm cáp hai tay trước ngực.|Duỗi tay ra trước, giữ 10–20 giây và thở đều.|Không khóa gối hoặc nín thở.|Dễ|hold
Standing Cable Wood Chop|Kéo cáp chéo thân đứng|Cáp cao|Bụng chéo|Đứng chân rộng vừa, xoay cả thân từ hông có kiểm soát.|Kéo tay theo đường chéo xuống về hông đối diện.|Không vặn gối đứng yên khi thân xoay mạnh.|Cơ bản|rotate
Half-Kneeling Cable Chop|Kéo cáp chéo tư thế quỳ một gối|Cáp cao|Bụng chéo|Quỳ một gối trên thảm, thân thẳng.|Kéo cáp theo đường chéo qua thân nhẹ nhàng.|Không giật người hoặc ngả lưng.|Cơ bản|rotate
Seated Knee Tuck|Thu gối ngồi trên ghế|Ghế cố định|Bụng thẳng|Ngồi ở mép ghế chắc, tay bám nhẹ hai bên.|Thu gối gần thân rồi duỗi ra có kiểm soát.|Không ngả thân quá xa hoặc làm ghế trượt.|Cơ bản|crunch
Hanging Knee Raise Assisted|Nâng gối treo xà có hỗ trợ|Ghế Roman chair/captain chair|Bụng dưới|Tựa cẳng tay trên giá hỗ trợ, vai ổn định.|Thu gối lên trước bụng, hạ chậm.|Không đu người hoặc kéo bằng hông quá mạnh.|Cơ bản|crunch
Captain Chair Knee Raise|Nâng gối ghế tập bụng|Máy captain chair|Bụng dưới|Tựa lưng và cẳng tay lên đệm, chân tự do.|Gập gối nâng về phía ngực rồi hạ chậm.|Không nhún chân hoặc ưỡn lưng.|Cơ bản|crunch
Suitcase Carry|Xách tạ một bên đi bộ|Một tạ đơn|Core chống nghiêng|Đứng thẳng cầm tạ một bên, vai cân bằng.|Đi bước ngắn 15–30 giây, đổi tay.|Không nghiêng người theo tạ.|Cơ bản|hold
Farmer Carry|Xách hai tạ đi bộ|Hai tạ đơn|Core ổn định|Đứng thẳng, mỗi tay cầm một tạ vừa sức.|Đi đều 15–30 giây, giữ xương sườn trên hông.|Không rướn cổ hoặc nín thở.|Cơ bản|hold
`
};
const breath = {
  press:'Hít vào khi hạ/thu tạ, thở ra lúc đẩy lên hoặc đẩy ra; không nín thở.',
  fly:'Hít vào khi mở tay, thở ra khi khép tay; giữ khuỷu hơi gập.',
  pull:'Thở ra khi kéo về người, hít vào khi trả tay chậm.',
  hinge:'Hít vào khi gập hông/hạ xuống, thở ra khi duỗi hông đứng lên.',
  squat:'Hít vào khi hạ người, thở ra khi đứng/đạp lên.',
  lunge:'Hít vào khi hạ người, thở ra khi đứng lên.',
  step:'Thở ra khi bước lên, hít vào khi xuống.',
  curl:'Thở ra khi gập khuỷu/gập gối, hít vào khi duỗi chậm.',
  extend:'Thở ra khi duỗi khuỷu/duỗi gối, hít vào khi gập về.',
  raise:'Thở ra khi nâng lên, hít vào khi hạ xuống.',
  rotate:'Thở ra lúc xoay hoặc kéo chéo, hít vào khi quay về; không nín thở.',
  open:'Thở ra khi mở chân/tay ra ngoài, hít vào khi trở lại.',
  close:'Thở ra khi khép chân lại, hít vào khi mở về.',
  kick:'Thở ra khi đưa chân ra sau, hít vào khi trả chân.',
  hold:'Thở đều tự nhiên suốt thời gian giữ; tuyệt đối không nín thở.',
  brace:'Thở ra nhẹ khi duỗi hoặc chống lực, hít vào khi thu về; không nín thở.',
  crunch:'Thở ra khi cuộn bụng/thu gối, hít vào khi trở về.',
};
const icon = Object.fromEntries(MUSCLE_GROUPS.map(g=>[g.id,g.icon]));
const secondary = {chest:'Tay sau, vai trước (ít hơn ở bài ép ngực)',back:'Tay trước, vai sau và cơ giữ bả vai',shoulders:'Cơ ổn định bả vai; tay sau ở bài đẩy vai',legs:'Mông, bắp chân hoặc core tùy bài',glutes:'Đùi sau, core và cơ ổn định hông',biceps:'Cơ cánh tay, cẳng tay',triceps:'Vai hoặc ngực tùy bài',core:'Cơ ổn định cột sống, hông'};
export const EXTRA_EXERCISES = {};
export const GROUP_IDS = {};
for (const group of MUSCLE_GROUPS){
  const lines=rows[group.id].trim().split('\n');
  GROUP_IDS[group.id]=[];
  lines.forEach((line,i)=>{
    const [name,vi,equipment,primary,setup,move,avoid,difficulty,mode]=line.split('|');
    if([name,vi,equipment,primary,setup,move,avoid,difficulty,mode].some(x=>!x))throw Error(`Thiếu thông tin bài tập ${group.id} ${i}`);
    const id=`${group.id}${String(i+1).padStart(2,'0')}`;
    EXTRA_EXERCISES[id]={name,vi,group:group.name,groupId:group.id,equipment,primaryMuscle:primary,secondaryMuscles:secondary[group.id],movementPattern:mode,sets:2,reps:mode==='hold'?'15–30 giây':(group.id==='core'?'8–12 hoặc mỗi bên':'8–12'),rest:group.id==='legs'||group.id==='glutes'?90:60,icon:icon[group.id],difficulty,video:`https://www.youtube.com/results?search_query=${encodeURIComponent(name+' exercise proper form tutorial')}`,steps:[`Chuẩn bị: ${setup}`,`Thực hiện: ${move}`,'Trở về vị trí ban đầu chậm và có kiểm soát; chỉ dùng biên độ không đau.'],breath:breath[mode],avoid,alternatives:[]};
    GROUP_IDS[group.id].push(id);
  });
  if(lines.length<20)throw Error(`Nhóm ${group.id} thiếu bài: ${lines.length}`);
}
// Each new movement links to several simpler options in its own muscle group.
for (const group of MUSCLE_GROUPS){
  const all=GROUP_IDS[group.id],easy=all.filter(id=>EXTRA_EXERCISES[id].difficulty==='Dễ');
  for(const id of all){
    const self=EXTRA_EXERCISES[id];
    const compatible=all.filter(k=>k!==id && (EXTRA_EXERCISES[k].movementPattern===self.movementPattern || EXTRA_EXERCISES[k].primaryMuscle===self.primaryMuscle));
    const beginner=compatible.filter(k=>EXTRA_EXERCISES[k].difficulty==='Dễ');
    EXTRA_EXERCISES[id].alternatives=[...new Set([...beginner,...compatible,...easy.filter(k=>k!==id)])].slice(0,4);
  }
}
export const FOCUS_TEMPLATES={
  FC:{groupId:'chest',title:'Ưu tiên ngực',exerciseIds:['chest01','chest02','chest03','chest05','triceps01']},
  FK:{groupId:'back',title:'Ưu tiên lưng',exerciseIds:['back02','back07','back09','back15','biceps01']},
  FV:{groupId:'shoulders',title:'Ưu tiên vai',exerciseIds:['shoulders01','shoulders02','shoulders09','shoulders17','triceps01']},
  FL:{groupId:'legs',title:'Ưu tiên chân',exerciseIds:['legs01','legs03','legs04','legs17','legs19']},
  FM:{groupId:'glutes',title:'Ưu tiên mông',exerciseIds:['glutes02','glutes07','glutes11','glutes01','glutes13']},
  FBi:{groupId:'biceps',title:'Ưu tiên tay trước',exerciseIds:['biceps01','biceps04','biceps06','biceps08','back07']},
  FTr:{groupId:'triceps',title:'Ưu tiên tay sau',exerciseIds:['triceps01','triceps07','triceps09','triceps04','chest01']},
  FCo:{groupId:'core',title:'Ưu tiên bụng/core',exerciseIds:['core01','core02','core07','core12','core05']}
};

// Special cases where a safer movement pattern matters more than matching group.
EXTRA_EXERCISES.back20.alternatives=['core02','back07'];
EXTRA_EXERCISES.shoulders20.alternatives=['back15','shoulders16'];
EXTRA_EXERCISES.legs20.alternatives=['glutes11','glutes09'];
