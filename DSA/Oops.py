class Car:
    def __init__(self, Brand, Model):
        self.Brand = Brand
        self.Model = Model

    def full_name (self):
        return f"{self.Brand} {self.Model}"    
    
class ElectricCar(Car):
    def __init__(self, Brand, Model, Battery_size):
        super().__init__(Brand, Model)
        self.Battery_size = Battery_size


my_car = Car("BMW", "520")       
print(my_car) 
# print(my_car.Brand) 
# print(my_car.Model)
myTesla = ElectricCar("Tesla"," Model Y","86kwh")
print(myTesla.Battery_size)

# print(my_car.full_name())