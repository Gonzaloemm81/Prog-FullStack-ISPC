from django.db import models

# Create your models here.
class Clientes(models.Model):

    id_cliente = models.BigIntegerField(primary_key=True)
    nombre_cliente = models.CharField(max_length=50, blank=False)
    direccion_cliente = models.CharField(max_length=255, blank=False)
    tel_cliente = models.BigIntegerField(blank=False)
    email_cliente = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table="clientes"
        verbose_name="Tabla de clientes"
        verbose_name_plural="Clientes"
    def __unicode__(self):
        return self.nombre_cliente
    def __str__(self):
        return self.nombre_cliente

class Destino(models.Model):

    cod_postal = models.IntegerField(primary_key=True)
    destinatario = models.CharField(max_length=50, blank=False)
    class Meta:
        db_table="destino"
        verbose_name="Tabla de destino"
        verbose_name_plural="Destinos"
    def __unicode__(self):
        return self.destinatario
    def __str__(self):
        return self.destinatario

class Sucursal(models.Model)
    
    id_sucursal = models.BigIntegerField(primary_key=True)
    postal_cod = models.ForeingKey(Destino, to_field="cod_postal", on_delete.CASCADE)
    class Meta:
        db_table="sucursal"
        verbose_name="Tabla de sucursales"
        verbose_name_plural="Sucursales"
    def __unicode__(self):
        return self.postal_cod
    def __str__(self):
        return self.postal_cod