"""ダミー物件データ"""

DUMMY_PROPERTIES = [
    {
        "propertyId": "P001",
        "name": "グランメゾン新宿",
        "area": "新宿区",
        "rent": 12,
        "layout": "1LDK",
        "station": "新宿駅",
        "walkMinutes": 8,
        "features": ["オートロック", "宅配ボックス", "築5年"],
    },
    {
        "propertyId": "P002",
        "name": "コンフォート渋谷",
        "area": "渋谷区",
        "rent": 15,
        "layout": "2LDK",
        "station": "渋谷駅",
        "walkMinutes": 10,
        "features": ["ペット可", "角部屋", "南向き"],
    },
    {
        "propertyId": "P003",
        "name": "プレシャス池袋",
        "area": "豊島区",
        "rent": 9,
        "layout": "1K",
        "station": "池袋駅",
        "walkMinutes": 5,
        "features": ["駅近", "バス・トイレ別", "収納豊富"],
    },
    {
        "propertyId": "P004",
        "name": "リバーサイド中野",
        "area": "中野区",
        "rent": 8,
        "layout": "1K",
        "station": "中野駅",
        "walkMinutes": 7,
        "features": ["初期費用安め", "インターネット無料", "フローリング"],
    },
    {
        "propertyId": "P005",
        "name": "パークビュー世田谷",
        "area": "世田谷区",
        "rent": 18,
        "layout": "2LDK",
        "station": "三軒茶屋駅",
        "walkMinutes": 6,
        "features": ["ルーフバルコニー", "床暖房", "閑静な住宅街"],
    },
]


def get_properties_text() -> str:
    """物件情報をテキスト形式で取得"""
    lines = []
    for p in DUMMY_PROPERTIES:
        features = "、".join(p["features"])
        lines.append(
            f"【{p['name']}】\n"
            f"・エリア: {p['area']} / {p['station']} 徒歩{p['walkMinutes']}分\n"
            f"・間取り: {p['layout']} / 家賃: {p['rent']}万円\n"
            f"・特徴: {features}"
        )
    return "\n\n".join(lines)
