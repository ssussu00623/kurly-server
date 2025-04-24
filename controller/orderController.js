import * as repository from '../repository/orderRepository.js'


export const add = (req, res) => {
    const { orderlist } = req.body;
    if (!orderlist?.length) {
        console.error("주문 데이터가 없음");
        return res.status(400).json({ message: "주문 데이터가 없습니다." }); // 상태 코드 400과 함께 오류 메시지 반환
    }

    Promise.all(orderlist.map(repository.add))
        .then(results => {
            res.json({ count: results.length });
        })
        .catch(error => {
            console.error("주문 저장 실패:", error);
            res.status(500).json({ message: "주문 저장에 실패했습니다." }); // 내부 서버 오류 처리
        });
};


/*************************************
        order 페이지에서 주문 정보 가져오기
*************************************/

export const getorderlist = async(req, res) => {
    const result = await repository.getorderlist(req.body)
    res.json(result)
    res.end;
}
