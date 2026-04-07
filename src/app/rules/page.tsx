import Image from "next/image";
export default function rules() {
    return (
        <main className="bg-white">
            <Image
                src="/images/0.jpg"
                alt="herorules"
                width={1600}
                height={800}
                className="w-full object-cover h-[680px] pt-10"
            />
            <div className="flex flex-col gap-y-8 text-center text-black">
                <h1 className="text-6xl pt-6"> 
                    RULES
                </h1>
                <p className="max-w-6xl mx-auto">
                1. Reception Hour: Reception opens from 9:30am to 5:00pm, 7 days. <br /><br />

2. Check-In time - 2 pm â€“ 5:00pm: Early check in is upon availability. For your convenience, please let us know if you expect to arrive after office hours, so we can arrange a self-check in for you.<br /><br />

3. Check out: Departing guests must remove all their belongings from their room, and check out by 10am. If you need to store your luggage please arrange with reception. If you check out late, you will be asked to pay for an extra night, so make sure you're up and ready in time!<br /><br />

4. Age restriction: You must be at least 18 years old to stay at our hostel.<br /><br />

5. Hostelling: NZ$20.00 Key Deposit (cash only) and a valid Photo ID are required when check-in. The ID must be passport, driving license or valid ID card with a clear photo of you.<br /><br />

6. Room allocation: When booking beds in dorm rooms for you and your friends, we have no guarantee to put you in the same room. Alternatively, booking a private room can assure you to be in the same room.<br /><br />

7. Kitchen: Kitchen is open for all residents of our hostel. You must wash the dishes, kitchen wares and clean the cooking area. Failure to do so may result in $20 fine.<br /><br />

8. Visitors: Visiting hours are from 10:00 am to 4:00pm. All visitors must report to the office. After 4:00pm, any non-residents who enter hostel will be asked to leave immediately or given a trespass notice.<br /><br />

9. No alcohol! No smoking! Consumption of alcohol/alcohol beverages and smoking are prohibited in the hostel premises. Please note the prohibition signs are distributed in the hostel.<br /><br />

10. Damage to Hostel's Property: Person(s) who damaged the property due to inappropriate behavior during their stay will have to reimburse Hobson Lodge.<br /><br />

11. Change bed: If you want to change bed, you must report to reception and get permission. Failure to do so may result in paying the unused bed.<br /><br />

12. The dorm room is not the laundry room: Please use the dryer to dry your clothes. Do not spread your wet clothes out or hang them on other people's beds.<br /><br />

13. Personal Property: Secure lockers for valuable items are provided in each dorm rooms. It is your responsibility to ensure your personal belongings are secure at all times. Hobson Lodge accepts no liability for the loss, theft or damage to guests' property.<br /><br />

14. Volume Down: Hobson Lodge expects to provide a quiet and comfortable living environment. Please lower your volume in the corridors at all times. Also please do not use mobile and other sound device in the dorm rooms during the night.<br /><br />

15. Cancellation and No-Show policies: As per hostel cancellation policy, you can make a free cancellation/modification 48 hours before 2pm (New Zealand local time) of the check in date. In case of late cancellation, modification or no-show the first night of the booking will be charged.<br /><br />

16. Preauthorization: The hostel reserves the right to pre-authorise the amount of the first night from your credit card prior to arrival. The pre-authorisation is not a charge and no funds have been debited from your account.<br /><br />

17. Guests Behaviour: Guests are expected to respect other guests, staffs, hostel residents and property. Any guest(s) who, in the opinion of our staff, compromise the comfort, safety or security of other guests, staff or local residents will be requested to leave the hostel premises.<br /><br />

Things are prohibited in the hostel Drugs, drunken, noisy, disorderly or abusive behaviour or physical violence In case of violation of any rules of the hostel, we reserve the right to check out the guest. Should there be any resistance to any member being requested to leave the hostel, the police will be contacted.
                </p>
            </div>
        </main>
    )
}