import * as repository from '../repository/orderRepository.js'


/*************************************
    결제 성공시 주문내역 테이블에 값 insert
*************************************/
export const add = (req, res) => {
    const { orderlist } = req.body;
    if (!orderlist?.length) {
        console.error("주문 데이터가 없음");
        return res.end(); // 데이터 없으면 에러메세지 출력 후 종료
    }

    Promise.all(orderlist.map(repository.add))
        .then(results => res.json({ count: results.length }))
        .catch(error => {
            console.error("주문 저장 실패:", error);
            res.end();
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
