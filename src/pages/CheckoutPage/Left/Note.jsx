import { Avatar } from "antd";
import Ghe from "./Ghe";

function Note() {
    return (
        <div className="grid grid-cols-6 gap-2 mx-auto" style={{ width: "100%" }}>
            {/* Ghế thường */}
            <Ghe type="gheThuong" note="Ghế thường" />

            {/* Ghế Vip */}
            <Ghe type="gheVip" note="Ghế vip" />

            {/* Ghế bạn chọn */}
            <Ghe
                type="gheDangChon"
                note="Ghế bạn chọn"
                element={
                    <span className="text-slate-200 text-xs">
                        <strong>A01</strong>
                    </span>
                }
            />

            {/* Ghế người khác chọn */}
            <Ghe
                type="gheDangChon"
                note="Ghế người khác chọn"
                element={<i className="fa-solid fa-user text-slate-200"></i>}
            />

            {/* Ghế đã mua */}
            <Ghe
                type="gheDuocMua"
                note="Ghế người khác mua"
                element={
                    <strong>
                        <i className="fa-solid fa-x text-slate-200"></i>
                    </strong>
                }
            />

            {/* Ghế đã mua */}
            <Ghe
                type="gheDaMua"
                note="Ghế bạn mua"
                element={<Avatar src={`https://picsum.photos/200`} size={20} />}
            />
        </div>
    );
}
export default Note;
