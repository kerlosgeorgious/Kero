const confessions = [
    "ما هو أكبر سر تخفيه عن أصدقائك؟",
    "هل سبق لك أن كذبت بشأن شيء كبير؟",
    "ما هو أكثر شيء ندمت عليه في حياتك؟",
    "ما هو أغرب شيء فعلته عندما كنت بمفردك؟",
    "هل سبق لك أن خنت ثقة شخص ما؟",
    "ما هو أكبر إحراج تعرضت له أمام الآخرين؟",
    "ما هو الشيء الذي تتمنى لو لم تفعله أبدًا؟",
    "هل سبق أن كذبت على والديك بشأن شيء مهم؟",
    "ما هو أكثر شيء يجعلك تشعر بالذنب حتى الآن؟",
    "هل سبق أن قلت شيئًا ندمت عليه لاحقًا؟",
    "ما هو أسوأ قرار اتخذته في حياتك؟",
    "هل سبق أن سرقت شيئًا صغيرًا من شخص ما؟",
    "هل لديك عادة سرية لا يعرفها أحد؟",
    "ما هو الشيء الأكثر إحراجًا الذي قلته بالخطأ؟",
    "هل سبق أن تظاهرت بالمرض لتجنب شيء ما؟",
    "هل سبق أن تجاهلت رسالة شخص عن قصد؟",
    "ما هو آخر كذبة قلتها؟",
    "إذا كان بإمكانك تغيير شيء واحد في حياتك، فما هو؟",
    "هل سبق أن ارتكبت خطأً كبيرًا ونجوت دون أن يلاحظ أحد؟",
    "ما هو الشيء الذي تتمنى لو لم تخبر به أحدًا؟",
    "هل سبق أن تكلمت عن شخص ما من وراء ظهره؟",
    "إذا كان عليك العيش بدون هاتفك لمدة أسبوع، هل ستتمكن من ذلك؟",
    "هل سبق أن تظاهرت بأنك تفهم شيئًا بينما كنت في الواقع لا تفهمه؟",
    "ما هو أسوأ موقف عاطفي مررت به؟",
    "هل لديك شخص تكرهه ولكنك تتظاهر بأنك تحبه؟",
    "إذا كان لديك فرصة لمعرفة شيء واحد عن مستقبلك، ماذا سيكون؟",
    "ما هو الشيء الأكثر إحراجًا الذي فعلته في مكان عام؟",
    "هل سبق أن جربت الغش في اختبار؟",
    "ما هو الشيء الذي تخجل منه في ماضيك؟",
    "هل لديك حساب سري على السوشيال ميديا؟",
    "ما هو أغرب حلم حلمت به؟",
    "هل سبق أن قرأت رسائل شخص آخر دون علمه؟",
    "إذا كان لديك خيار لتغيير اسمك، هل ستفعل؟",
    "هل لديك صديق تكره شيئًا فيه لكنك لا تخبره؟",
    "ما هو أكثر شيء تخجل منه؟",
    "ما هو الشيء الذي يجعلك تبكي فورًا؟",
    "ما هو أكبر سر أخفيته عن عائلتك؟",
    "هل سبق أن تمنيت لو لم تقابل شخصًا معينًا؟",
    "إذا اضطررت للعيش مع شخص واحد فقط لبقية حياتك، من سيكون؟",
    "ما هو الشيء الذي يجعلك تشعر بالخوف؟",
    "هل سبق أن شعرت بالغيرة من شخص معين؟",
    "ما هو أكثر شيء أحرجك في المدرسة؟",
    "هل سبق أن فقدت شيئًا ثم كذبت بشأنه؟",
    "إذا كنت تستطيع الرجوع في الزمن، أي لحظة ستغير؟",
    "ما هو أسوأ شيء فعلته عندما كنت طفلاً؟",
    "هل سبق أن تجسست على أحد أفراد عائلتك؟",
    "إذا اكتشفت أنك مراقب، ماذا ستفعل؟",
    "هل سبق أن ندمت على عدم قول الحقيقة؟",
    "ما هو الشيء الأكثر غرابة الذي تحتفظ به في غرفتك؟",
    "هل سبق أن تمنيت لو كنت شخصًا آخر؟",
    "ما هو الشيء الذي لا تستطيع العيش بدونه؟",
    "هل سبق أن كرهت شخصًا بدون سبب؟",
    "ما هو أكثر شيء ندمت على شرائه؟",
    "ما هو أغرب شيء فعلته في لحظة ملل؟",
    "هل لديك عادة سيئة تحاول التخلص منها؟",
    "ما هو أسوأ طعام تناولته في حياتك؟",
    "إذا كان عليك التخلي عن حاسة واحدة، أيها ستختار؟",
    "ما هو أكثر موقف محرج تعرضت له أثناء العمل؟",
    "هل سبق أن رفضت مساعدة شخص كان يحتاجك؟",
    "إذا كان لديك يوم واحد فقط للعيش، ماذا ستفعل؟",
    "هل سبق أن أحببت شخصًا لم يكن يجب أن تحبه؟",
    "ما هو أكثر شيء تكرهه في نفسك؟",
    "هل سبق أن كنت غير مخلص لشخص قريب منك؟",
    "ما هو الشيء الأكثر جنونًا الذي فعلته؟",
    "إذا استطعت السفر إلى أي مكان الآن، أين ستذهب؟",
    "ما هو الشيء الذي لم تخبر به أحدًا عن نفسك؟",
    "هل سبق أن فعلت شيئًا وندمت عليه فورًا؟",
    "ما هو أكثر شيء تتمنى لو تعلمته؟",
    "هل سبق أن خذلت شخصًا مهمًا في حياتك؟",
    "ما هو أسوأ موقف تعرضت له مع الشرطة؟",
    "هل سبق أن تمنيت لو كنت مشهورًا؟",
    "ما هو أكثر موقف شعرت فيه بالندم؟",
    "هل سبق أن تمنيت لو لم تكن لديك عائلة؟",
    "إذا كان عليك أن تعيش في مكان واحد للأبد، أين سيكون؟",
    "ما هو الشيء الذي يجعلك سعيدًا بدون سبب؟",
    "هل سبق أن شعرت أنك تريد الاختفاء؟",
    "ما هو أكثر شيء تخاف منه في المستقبل؟",
    "إذا كان بإمكانك تغيير اسمك، ماذا سيكون؟",
    "ما هو الشيء الوحيد الذي يجعلك تشعر بالضعف؟",
    "هل سبق أن شعرت بالوحدة الشديدة؟",
    "ما هو أغرب شيء فعلته وأنت بمفردك؟",
    "إذا كان عليك أن تختار بين الحب والمال، ماذا ستختار؟",
    "ما هو آخر شيء كذبت بشأنه؟",
    "هل سبق أن تجنبت شخصًا لأنك لا تريد التحدث إليه؟",
    "ما هو أكثر شيء جعلك تبكي من قبل؟",
    "إذا كان بإمكانك أن تكون أي شخص آخر ليوم واحد، من سيكون؟",
    "ما هو الشيء الذي تحبه في شخصيتك؟",
    "هل سبق أن خسرت شخصًا مهمًا لك بسبب خطأ ارتكبته؟",
    "ما هو الشيء الذي تتمنى تغييره في الماضي؟",
    "ما هو آخر موقف جعلك تشعر بالإحراج؟",
    "ما هو أغرب شيء فعلته لجذب انتباه شخص ما؟",
    "هل سبق أن تمنيت أن تعود إلى الطفولة؟",
    "ما هو أسوأ شيء فعلته في حياتك؟",
    "إذا كان لديك فرصة ثانية في الحياة، ما هو أول شيء ستغيره؟"
];

